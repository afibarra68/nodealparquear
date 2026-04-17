# nodealparquear

API backend **AlParquear** en **NestJS 11** y **TypeScript**, pensada para convivir o sustituir progresivamente el monolito Java (`parking-app`) manteniendo rutas y contratos orientados a paridad. Persistencia con **PostgreSQL** vía **Prisma**.

Los metadatos npm (**nombre**, **versión**, **scripts**, **dependencias**, **licencia**) están en **`package.json`** en la raíz de esta carpeta.

### Git: qué sí debe ir en el commit

Para que el clon sea reproducible y no falten archivos al compilar:

- **`package.json`** y **`package-lock.json`**
- **`nest-cli.json`**, **`tsconfig.json`**, **`tsconfig.build.json`**
- **`prisma/schema.prisma`** y **`prisma/migrations/`** (si usás Prisma Migrate)
- **`src/`**, **`test/`**, **`README.md`**, **`.env.example`**, **`.gitignore`**

No subas **`.env`** (secretos), **`node_modules/`** ni **`dist/`** (ignorados por `.gitignore`).

```bash
cd nodealparquear
git add package.json package-lock.json nest-cli.json tsconfig.json tsconfig.build.json .env.example .gitignore README.md prisma src test
git status
git commit -m "chore(nodealparquear): archivos de proyecto y lockfile"
```

Ajustá el `git add` si falta o sobra alguna ruta en tu árbol (por ejemplo si no existe `prisma/` todavía).

---

## Requisitos

- **Node.js** 20 LTS o superior (el proyecto declara tipos para Node 24; usá una LTS estable en producción).
- **npm** (o compatible).
- **PostgreSQL** accesible con una cadena de conexión válida.

---

## Puesta en marcha

```bash
cd nodealparquear
npm install
npm run prisma:generate
```

**Build y arranque:** el proyecto usa **`tsc`** para compilar (`npm run build`) y **`tsx watch`** en desarrollo (`npm run start:dev`) para evitar depender del binario `nest` cuando el CLI falla por dependencias rotas de `@angular-devkit` en el entorno.

**Stubs de paridad con Java:** tras cambiar la lista de controladores en `scripts/emit-parity-stubs.mjs`, regenerá los controladores 501 con:

```bash
npm run codegen:parity
```

Si **Jest** o **Nest CLI** fallan con `MODULE_NOT_FOUND` dentro de `node_modules`, probá una instalación limpia: `rm -rf node_modules && npm ci` (o equivalente en Windows).

### Variables de entorno

Podés partir de **`.env.example`**: copialo a `.env` y completá los valores. No subas `.env` al repositorio. La carga y validación ocurren al arrancar con `ConfigModule` y **Zod** (`src/config/env/root-env.schema.ts`).

| Variable       | Obligatoria | Descripción |
|----------------|-------------|-------------|
| `DATABASE_URL` | Sí          | URL de conexión PostgreSQL para Prisma (formato estándar `postgresql://...`). |
| `NODE_ENV`     | No          | `development` (defecto), `production` o `test`. |
| `PORT`         | No          | Puerto HTTP (entero positivo; por defecto **3000**). |

Ejemplo mínimo:

```env
DATABASE_URL="postgresql://usuario:clave@localhost:5432/alparquear"
NODE_ENV=development
PORT=3000
```

Si falla la validación, la aplicación no arranca y verás un mensaje del tipo `Invalid environment: ...`.

### Prisma

Tras instalar dependencias o cambiar `prisma/schema.prisma`:

```bash
npm run prisma:generate
```

**Base de datos nueva (solo Prisma):** aplicá las migraciones del directorio `prisma/migrations/`:

```bash
npm run prisma:migrate:deploy
```

En desarrollo interactivo:

```bash
npm run prisma:migrate
```

**Base ya creada por Flyway** (`parking-app`): no ejecutes `prisma migrate deploy` contra esa misma base si las tablas ya existen con otro historial de migraciones, salvo que hayas alineado a propósito el esquema. En ese escenario suele bastar `prisma generate` y, si hace falta sincronizar el modelo con la BD real, `npx prisma db pull`.

El comentario en `prisma/schema.prisma` (si está presente) resume la relación con el esquema Java/Flyway.

---

## Ejecución

| Comando            | Uso |
|--------------------|-----|
| `npm run start:dev` | Desarrollo con recarga. |
| `npm run start`     | Una ejecución sin watch. |
| `npm run start:prod`| Ejecuta `node dist/main` (requiere `npm run build` previo). |
| `npm run build`     | Compila a `dist/`. |

El arranque HTTP está encapsulado en `HttpServerBootstrap` (`src/bootstrap/http-server.bootstrap.ts`): crea la app Nest, `enableShutdownHooks()` y escucha en `PORT`.

---

## Salud del servicio

- **`GET /health`**: comprobación de disponibilidad; incluye estado de la base ejecutando `SELECT 1` vía Prisma (`HealthQueryService`). Respuesta típica: `status: ok` y `database: up`, o `degraded` si la base no responde.

Útil para balanceadores, Kubernetes o plataformas tipo App Platform.

---

## Arquitectura y código

### Capas y convenciones

- **Presentación:** controladores bajo `src/modules/<dominio>/presentation/`.
- **Aplicación:** servicios de caso de uso en `application/` donde aplica (por ejemplo `auth`, `transactions`).
- **Infraestructura:** `PrismaModule`, `HealthModule`, `src/infrastructure/prisma/prisma.service.ts`.
- **Configuración:** `src/config/env/` (esquema Zod, validación, adaptador para `ConfigModule`).
- **HTTP transversal:** filtro global de excepciones y pipe de validación registrados en `AppModule` (`APP_FILTER`, `APP_PIPE`), no middlewares Express sueltos en `main.ts`.

### Módulos de dominio (`AppModule`)

Incluyen entre otros: `Auth`, `Users`, `Companies`, `Catalog`, `Clients`, `Transactions`, `Pos`, `Shifts`, `Printers`, `Billing`, `BusinessServices`, `Integration`.

### Paridad con parking-app y política de migración

Muchos controladores extienden **`ParkingParityBaseController`** (`src/common/migration/parking-parity.base-controller.ts`) e inyectan **`UnmigratedFeaturePolicy`**: mientras un flujo siga delegado en Java, las rutas pueden responder **501 Not Implemented** con un cuerpo JSON que incluye `code: MIGRATION_PENDING` y un `operationKey` descriptivo (por ejemplo la ruta equivalente en el monolito).

- **`AuthApplicationService`:** login, validación de token y cambio de contraseña siguen esa política; **`POST /auth/logout`** no lanza error (el cliente invalida el token localmente, alineado con el comportamiento descrito en código).

Cuando implementes un caso de uso real en Node, reemplazá las llamadas a `deny()` por la lógica correspondiente y ajustá pruebas.

### Integración

`IntegrationModule` expone un contrato tipo gateway (por ejemplo usuarios legados) con una implementación **noop** hasta cablear servicios externos.

---

## Pruebas

```bash
npm run test        # unitarias (Jest, `src/**/*.spec.ts`)
npm run test:e2e    # e2e (config en `test/jest-e2e.json`)
npm run test:cov    # cobertura
```

Los e2e de ejemplo (`test/app.e2e-spec.ts`) sustituyen **`PrismaService`** por **`E2ePrismaServiceStub`** para no exigir PostgreSQL en CI o entornos sin base de datos; el stub simula que la base está `up` en `/health`.

---

## Calidad de código

```bash
npm run lint
npm run format
```

---

## Despliegue (notas breves)

1. Definí `NODE_ENV=production`, `DATABASE_URL` y `PORT` en el entorno del proceso o del orquestador.
2. En la máquina o imagen de despliegue: `npm ci`, `npm run prisma:generate`, `npm run build`, `npm run start:prod` (o el comando que use tu supervisor).
3. Si la base la crea solo este servicio, ejecutá `npm run prisma:migrate:deploy` antes del primer arranque o como paso de migración en tu pipeline.

---

## Estructura de carpetas (resumen)

```
nodealparquear/
├── prisma/                 # schema.prisma y migraciones (si están versionadas)
├── src/
│   ├── bootstrap/          # arranque HTTP
│   ├── common/             # HTTP, migración/paridad
│   ├── config/env/         # variables de entorno (Zod)
│   ├── infrastructure/     # Prisma, health
│   ├── modules/            # dominios Nest (auth, users, …)
│   ├── app.module.ts
│   └── main.ts
├── test/                   # e2e y stubs
├── package.json
└── README.md
```

---

## Relación con el monorepo

Este proyecto vive junto a otros (por ejemplo `parking-app` en Spring Boot). El modelo relacional histórico se evoluciona allí con **Flyway**; este API puede consumir la **misma** instancia de PostgreSQL cuando el esquema esté alineado, o una base dedicada si generás el esquema con Prisma Migrate.

---

## Licencia

El campo `license` en `package.json` es **`UNLICENSED`**: código de uso **privado** (sin licencia pública de reutilización). Si el producto pasa a licencia abierta o a un contrato concreto, actualizá `package.json`, esta sección y, si aplica, un archivo `LICENSE` en la raíz del paquete.

**Titular del copyright Andres felipe ibarra © 2026 *[A I F No Enterprise networks]*. Todos los derechos reservados salvo disposición expresa en contrato o licencia por escrito.

