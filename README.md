# Configuración del Backend

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos:

- **Java** versión 17 o superior.
- **IntelliJ IDEA** u otro IDE compatible con proyectos Java y Spring Boot.
- **MySQL** version 8 o superior.

## Configuración Inicial

1. Crea un esquema en MySQL con el nombre `vocaltechdb`.
2. Configura las siguientes variables en el archivo `application.properties` (opcional, ya que ya tienen valores predeterminados):

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
```

## Ejecución del Proyecto

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
