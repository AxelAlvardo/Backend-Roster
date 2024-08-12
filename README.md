# 🎬 Movie Roster API

Bienvenido a la API de **Movie Roster**: una aplicación tipo wiki para consultar personajes de películas, series y libros. Este backend está construido con TypeScript y varias herramientas útiles para una experiencia de desarrollo fluida y eficiente.

## 🛠️ Tecnologías y Dependencias

- **[Express](https://expressjs.com/)**: Framework minimalista para construir el servidor.
- **[Mongoose](https://mongoosejs.com/)**: ODM para MongoDB.
- **[Cloudinary](https://cloudinary.com/)**: Para el manejo de imágenes en la nube.
- **[Multer](https://www.npmjs.com/package/multer)**: Middleware para la carga de archivos.
- **[Multer Storage Cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)**: Integración de Multer con Cloudinary.
- **[Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc)** y **[Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)**: Para la documentación y visualización de la API.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Para la gestión de variables de entorno.
- **[express-validator](https://express-validator.github.io/docs/)**: Para la validación de datos en las solicitudes.
- **[colors](https://www.npmjs.com/package/colors)**: Para la coloración de la salida en consola.
- **[fs](https://nodejs.org/api/fs.html)**: Para el manejo de archivos en el sistema. (Dependencia de seguridad)
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Para la recarga automática del servidor durante el desarrollo.

## 🚀 Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/AxelAlvardo/Backend-Roster.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Backend-Roster
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno. Ejemplo:

    ```env
    CLOUDINARY_CLOUD_NAME=tu-cloud-name
    CLOUDINARY_API_KEY=tu-api-key
    CLOUDINARY_API_SECRET=tu-api-secret
    ```

5. Ejecuta el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

## 🏗️ Uso

Puedes consultar la documentación de la API accediendo a http://localhost:4000/docs

