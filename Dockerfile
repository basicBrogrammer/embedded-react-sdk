# Recommended to use Docker image version that matches Playwright version: https://hub.docker.com/_/microsoft-playwright
FROM mcr.microsoft.com/playwright:v1.33.0-focal as base

# Setup dependencies
# jq is used to easily parse json string
RUN apt-get -y update \
  && apt-get install -y make gcc g++ jq\
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install PNPM dependencies
# Playwright being one of them and is quite heavy to download. This is why it is important
# to cache that layer as much as we can.
COPY [".nvmrc", "./"]
COPY ["package.json", "package-lock.json", "./"]

RUN npm install

FROM base as build

# COPY only the files necessary for anything related to our build/tests/lints etc
# The files most likely to change should be copied at the very end.
COPY ["eslint.config.js", ".prettierignore", ".prettierrc.js", "stylelint.config.js", "./"]
COPY ["tsconfig.json", "tsconfig.node.json", "./"]

# Build our packages dist files
RUN npm run build
