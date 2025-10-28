# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copy manifest(s)
COPY package.json ./
# Copy whichever lockfiles you might have (optional)
COPY package-lock.json* ./
COPY pnpm-lock.yaml* ./

# Install deps (prefer npm ci if lockfile exists; otherwise install)
RUN if [ -f package-lock.json ]; then \
      echo "Using npm ci (package-lock.json found)"; npm ci; \
    else \
      echo "No package-lock.json; running npm install"; npm install; \
    fi

# Build app
COPY . .
RUN npm run build
