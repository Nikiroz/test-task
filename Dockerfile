# syntax=docker/dockerfile:1

FROM node:20-bookworm-slim AS build

WORKDIR /app

# Install only the dependencies needed to build the Vite project.
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy application sources and produce the production bundle.
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime

ENV NODE_ENV=production

# Copy the build output into the default nginx web root.
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
