# Usar una imagen base de PHP con Apache
FROM php:8.2-apache

# Instalar extensiones de PHP necesarias
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalar Node.js y Angular CLI
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g @angular/cli

# Configurar el directorio de trabajo para Laravel
WORKDIR /var/www/html/laravel

# Copiar los archivos de Laravel al contenedor
COPY ./laravel /var/www/html/laravel

# Instalar las dependencias de Laravel
RUN composer install
RUN npm install

# Configurar permisos
RUN chown -R www-data:www-data /var/www/html/laravel/storage /var/www/html/laravel/bootstrap/cache

# Configurar el directorio de trabajo para Angular
WORKDIR /var/www/html/angular

# Copiar los archivos de Angular al contenedor
COPY ./angular /var/www/html/angular

# Instalar las dependencias de Angular
RUN npm install

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Apache y Flask
CMD ["bash", "-c", "service apache2 start && python3 /var/www/flask/app.py"]
