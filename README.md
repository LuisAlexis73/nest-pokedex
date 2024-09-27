<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.dist** y renobrar la copia como **.env**

6. Completar las variables del archivo **.env** con las propias.

7. Ejecutar la aplicación en desarrollo:

```
yarn start:dev
```

6. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Entorno de Producción

1. Crear el archivo **.env.prod**
2. Completar con las variables de entorno de producción.
3. Crear la imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
