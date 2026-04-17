#!/bin/sh
set -e
cd /app

if [ "${SKIP_PRISMA_MIGRATE:-0}" = "1" ]; then
  exec node dist/main.js
fi

if [ -d prisma/migrations ] && [ -n "$(ls -A prisma/migrations 2>/dev/null)" ]; then
  npx prisma migrate deploy
fi

exec node dist/main.js
