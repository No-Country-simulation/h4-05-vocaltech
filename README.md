# H4-05-Vocaltech
![banner-linkedin.jpg](https://res.cloudinary.com/dpp28f2ek/image/upload/v1739545922/vocaltech_pd7ulv.png)

Vocaltech es un proyecto desarrollado con el enfoque de hacer crecer y asesorar a emprendedores y empresas en el desarrollo profesional y comercial de estos. Este MVP es el resultado de la participación de un equipo multidiciplinario enfocado a solucionar los problemas y necesidades de los clientes Vos y Tu Voz y No Country

## Authors

- [@mariagaa993](https://github.com/mariagaa993)
- [@MartinKun](https://github.com/MartinKun)
- [@santgeek](https://github.com/santgeek)
- [@Juanmanu12](https://github.com/Juanmanu12)

## Deployment  

### Frontend  
- **Acceso usuario:** [https://frontend-three-sigma-96.vercel.app](https://frontend-three-sigma-96.vercel.app)  
- **Acceso administrador:** [https://frontend-three-sigma-96.vercel.app/login-admin](https://frontend-three-sigma-96.vercel.app/login-admin)  

### Backend  
- **API principal:** [https://vocaltechapp-latest.onrender.com](https://vocaltechapp-latest.onrender.com/)  

### Microservicio de Citas  
- **Servicio de citas:** [https://h4-05-vocaltech.onrender.com](https://h4-05-vocaltech.onrender.com/)  

## Configuración del Backend

### Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos:

- **Java** versión 17 o superior.
- **IntelliJ IDEA** u otro IDE compatible con proyectos Java y Spring Boot.
- **MySQL** version 8 o superior.

### Configuración Inicial

1. Crea un esquema en MySQL con el nombre `vocaltechdb`.
2. Configura las siguientes variables en el archivo `application.properties`:

```properties
   DB_URL=jdbc:mysql://localhost:3306/vocaltechdb
   DB_USER_NAME=usuario de la base de  datos
   DB_PASSWORD=contraseña de la base de datos
   ADMIN1_NAME=nombre del admin1
   ADMIN1_EMAIL=email del admin1
   ADMIN1_PASSWORD=contraseña del admin1
   ADMIN2_NAME=nombre del admin2
   ADMIN2_EMAIL=email del admin2
   ADMIN2_PASSWORD=contraseña del admin2
   JWT_KEY=clave jwt
   EMAIL_USERNAME
   EMAIL_PASSWORD
   EMAIL_HOST
```

### Ejecución del Proyecto

Para iniciar el servidor, ejecuta la clase principal del proyecto:

```java
@SpringBootApplication
public class VocalTechApplication {

 public static void main(String[] args) {
     SpringApplication.run(VocalTechApplication.class, args);
 }
}
```
El servidor estará disponible en el puerto 8080 por defecto.

La documentación de la api estará disponible en la ruta [http://localhost:8080/swagger-ui.html](URL)

## Configuración del Frontend

Este proyecto está construido con las libretías de React y Boostrap. Para tener en cuenta la ejecución, construcción y testeo de la app ten presentes los siguientes scripts.

### Scripts disponibles

En el directorio del proyecto puedes ejecutar:

```bash
  npm start
```

Este comando corre la aplicación en dev mode.
Abre  http://localhost:3000 para ver la aplicación en el navegador.

Este comando hará que la página se refresque cada que guardes cambios.

```bash
  npm test
```

Ejecuta la consola de test en vista interactiva

```bash
  npm run build
```

Construye la app para producción en la carpeta build. 

