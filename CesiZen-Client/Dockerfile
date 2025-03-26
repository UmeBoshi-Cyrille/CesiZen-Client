# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Optimized production image
FROM nginx:alpine
# Remove default config
RUN rm /etc/nginx/conf.d/default.conf
# Configure environment
ENV NGINX_ROOT_PATH=/etc/nginx \
  APP_ROOT_PATH=/usr/share/nginx/html \
  NGINX_CONF_PATH=/etc/nginx/conf.d/
# Copy nginx configuration
COPY nginx/nginx.conf $NGINX_ROOT_PATH/
COPY nginx/default.conf $NGINX_CONF_PATH
# Copy build artifacts from builder
COPY --from=builder /app/dist $APP_ROOT_PATH

# Security hardening
RUN chown -R nginx:nginx $APP_ROOT_PATH && \
  chmod -R 755 $APP_ROOT_PATH && \
  find $APP_ROOT_PATH -type f -exec chmod 644 {} \;

USER nginx:nginx

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 8080
