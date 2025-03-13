FROM nginx:alpine

ENV NGINX_ROOT_PATH=/etc/nginx
ENV APP_ROOT_PATH=/usr/share/nginx/html
ENV NGINX_LOG_PATH=/var/log/nginx
ENV NGINX_CONFIG_PATH=$NGINX_ROOT_PATH/conf.d

COPY docker/nginx/ $NGINX_ROOT_PATH/templates/
COPY dist $APP_ROOT_PATH

RUN chown -R nginx:nginx /var/cache/nginx /var/run $NGINX_LOG_PATH $APP_ROOT_PATH $NGINX_ROOT_PATH \
    && chmod 777 -R /var/cache/nginx /var/run $NGINX_LOG_PATH $NGINX_ROOT_PATH $APP_ROOT_PATH

USER nginx
