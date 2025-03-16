FROM nginx:alpine

# Remove default nginx content
# Remove default Nginx configuration
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/*

ENV NGINX_ROOT_PATH=/etc/nginx
ENV APP_ROOT_PATH=/usr/share/nginx/html
ENV NGINX_LOG_PATH=/var/log/nginx
ENV NGINX_CONFIG_PATH=$NGINX_ROOT_PATH/conf.d

# Copy custom Nginx configuration
COPY docker/nginx/ $NGINX_ROOT_PATH/templates/
COPY dist $APP_ROOT_PATH

RUN chown -R nginx:nginx /var/cache/nginx /var/run $NGINX_LOG_PATH $APP_ROOT_PATH $NGINX_ROOT_PATH \
    && chmod 777 -R /var/cache/nginx /var/run $NGINX_LOG_PATH $NGINX_ROOT_PATH $APP_ROOT_PATH

USER nginx


# Copy source files
# Build Angular app for production
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve with Nginx

FROM nginx:alpine


# Copy custom Nginx configuration
# COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built files from previous stage
COPY --from=build /app/dist/cesizen /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
# Setting daemon off = ensures Nginx remains in the foreground
# allowing Docker to monitor and manage it properly
# Following the principles to run one service or process per container
CMD ["nginx", "-g", "daemon off;"]
