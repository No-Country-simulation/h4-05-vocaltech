package vocaltech.demo.email;


import vocaltech.demo.controller.data.response.EntrepreneurLeadResponse;
import vocaltech.demo.controller.data.response.ExecutiveLeadResponse;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Template;

import java.util.List;

public class EmailTemplates {

    public static String getRegistrationSuccessEmailTemplate(String fullName) {
        StringBuilder builder = new StringBuilder();
        final String LOGIN_PATH = "https://frontend-three-sigma-96.vercel.app/login-admin";
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Registro Exitoso en Vocaltech</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")
                .append("<tr>")
                .append("<td style=\"position: relative;\">")
                .append("<img src=\"https://res.cloudinary.com/dpp28f2ek/image/upload/v1744686008/vocaltech_logo_gq8ggl.png\" alt=\"Banner de Vocaltech\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">¡Bienvenido a Vocaltech, Administrador!</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a ").append(fullName).append(",</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">¡Felicitaciones! Te has registrado exitosamente como administrador en la plataforma Vocaltech. Ahora tienes acceso al panel de administración para gestionar las funciones de la plataforma.</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Puedes iniciar sesión en la plataforma haciendo clic en el siguiente enlace:</p>")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 30px 0;\">")
                .append("<a href=\"").append(LOGIN_PATH).append("\" style=\"background-color: #4C51BF; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; display: inline-block;\">Iniciar sesión</a>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Si tienes algún problema para iniciar sesión o necesitas asistencia, no dudes en contactarnos.</p>")
                .append("<p style=\"line-height: 1.5;\">Gracias por unirte a Vocaltech.</p>")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p>© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }

    public static String getDiagnosticResultsEmailTemplate(String fullName, List<Template> selectedTemplates) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Resultados del Diagnóstico</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")

                // Fondo general con gradiente
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")

                // Contenedor principal del email
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.95); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")

                // Logo como banner
                .append("<tr>")
                .append("<td style=\"background-color: #ffffff; padding: 30px 0; text-align: center;\">")
                .append("<img src=\"https://res.cloudinary.com/dpp28f2ek/image/upload/v1744686008/vocaltech_logo_gq8ggl.png\" alt=\"Vocaltech Logo\" style=\"max-height: 60px; display: inline-block;\">")
                .append("</td>")
                .append("</tr>")

                // Contenido principal con mensaje estándar
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a ").append(fullName).append(",</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Gracias por contactarte con nosotros. Nos comunicaremos contigo a la brevedad.</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")

                // Footer
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("</td>")
                .append("</tr>")

                .append("</table>") // fin del inner table
                .append("</td>")
                .append("</tr>")
                .append("</table>") // fin del fondo gradiente
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }


    public static String getDiagnosticReceivedEmailTemplate(String fullName) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Resultados del Diagnóstico</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")

                // Fondo general con gradiente
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")

                // Contenedor principal del email
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.95); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")

                // Logo como banner
                .append("<tr>")
                .append("<td style=\"background-color: #ffffff; padding: 30px 0; text-align: center;\">")
                .append("<img src=\"https://res.cloudinary.com/dpp28f2ek/image/upload/v1744686008/vocaltech_logo_gq8ggl.png\" alt=\"Vocaltech Logo\" style=\"max-height: 60px; display: inline-block;\">")
                .append("</td>")
                .append("</tr>")

                // Contenido principal con mensaje estándar
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a ").append(fullName).append(",</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Gracias por contactarte con nosotros. Nos comunicaremos contigo a la brevedad.</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")

                // Footer
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("</td>")
                .append("</tr>")

                .append("</table>") // fin del inner table
                .append("</td>")
                .append("</tr>")
                .append("</table>") // fin del fondo gradiente
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }


    public static String getNewContactNotificationEmailTemplate(String name, String email, String topic, String message) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Notificación de Nueva Consulta</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")
                .append("<tr>")
                .append("<td style=\"position: relative;\">")
                .append("<img src=\"https://frontend-three-sigma-96.vercel.app/images/emprendedores.jpg\" alt=\"Banner\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">Nueva Consulta Recibida</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a Administrador/a,</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Se ha recibido una nueva consulta. Los detalles son los siguientes:</p>")
                .append("<p style=\"margin-bottom: 10px; font-weight: bold;\">Nombre:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">" + name + "</p>")
                .append("<p style=\"margin-bottom: 10px; font-weight: bold;\">Correo Electrónico:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">" + email + "</p>")
                .append("<p style=\"margin-bottom: 10px; font-weight: bold;\">Tema:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">" + topic + "</p>")
                .append("<p style=\"margin-bottom: 10px; font-weight: bold;\">Mensaje:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">" + message + "</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p>© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }

    public static String getNewSubscriptionNotificationEmailTemplate(String email) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Notificación de Nueva Suscripción</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")
                .append("<tr>")
                .append("<td style=\"position: relative;\">")
                .append("<img src=\"https://frontend-three-sigma-96.vercel.app/images/emprendedores.jpg\" alt=\"Banner\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">Nueva Suscripción Recibida</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a Administrador/a,</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Se ha recibido una nueva suscripción. El correo electrónico asociado es el siguiente:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Correo Electrónico:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">" + email + "</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p>© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }

    public static String getNewQueryNotificationEmailTemplate(String userEmail) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Resultados del Diagnóstico</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")

                // Fondo general con gradiente
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")

                // Contenedor principal del email
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.95); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")

                // Logo como banner
                .append("<tr>")
                .append("<td style=\"background-color: #ffffff; padding: 30px 0; text-align: center;\">")
                .append("<img src=\"https://res.cloudinary.com/dpp28f2ek/image/upload/v1744686008/vocaltech_logo_gq8ggl.png\" alt=\"Vocaltech Logo\" style=\"max-height: 60px; display: inline-block;\">")
                .append("</td>")
                .append("</tr>")

                // Contenido principal con mensaje estándar
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Gracias por contactarte con nosotros. Nos comunicaremos contigo a la brevedad.</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Saludos cordiales,<br>El equipo de Vocaltech</p>")
                .append("</td>")
                .append("</tr>")

                // Footer
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("</td>")
                .append("</tr>")

                .append("</table>") // fin del inner table
                .append("</td>")
                .append("</tr>")
                .append("</table>") // fin del fondo gradiente
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }


    public static String getNewEntrepreneurDiagnosticReceivedEmailTemplate(EntrepreneurLeadResponse leadResponse) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Nuevo Diagnóstico Recibido</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")
                .append("<tr>")
                .append("<td style=\"position: relative;\">")
                .append("<img src=\"https://frontend-three-sigma-96.vercel.app/images/emprendedores.jpg\" alt=\"Banner\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">Nuevo Diagnóstico Recibido</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a Administrador/a,</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Hemos recibido un nuevo diagnóstico con los siguientes detalles:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Nombre del Participante:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getFullname()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Correo Electrónico:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getEmail()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Teléfono:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getPhone()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Sector del Proyecto:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getProjectSector()).append("</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold; text-align: center;\">Respuestas del Diagnóstico:</p>");

        for (Option option : leadResponse.getAnswers()) {
            builder.append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Pregunta:</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(option.getQuestion().getValue()).append("</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Respuesta:</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(option.getValue()).append("</p>");
        }

        builder.append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p style=\"line-height: 1.5;\">© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p>© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }

    public static String getNewExecutiveDiagnosticReceivedEmailTemplate(ExecutiveLeadResponse leadResponse) {
        StringBuilder builder = new StringBuilder();
        builder
                .append("<!DOCTYPE html>")
                .append("<html lang=\"es\">")
                .append("<head>")
                .append("<meta charset=\"UTF-8\">")
                .append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
                .append("<title>Nuevo Diagnóstico Ejecutivo Recibido</title>")
                .append("</head>")
                .append("<body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f4f4f4;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background: linear-gradient(to bottom right, #4C51BF, #6B7DFF, #8A9BFF);\">")
                .append("<tr>")
                .append("<td align=\"center\" style=\"padding: 20px;\">")
                .append("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width: 600px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">")
                .append("<tr>")
                .append("<td style=\"position: relative;\">")
                .append("<img src=\"https://frontend-three-sigma-96.vercel.app/images/emprendedores.jpg\" alt=\"Banner\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"padding: 30px;\">")
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">Nuevo Diagnóstico Ejecutivo Recibido</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a Administrador/a,</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Hemos recibido un nuevo diagnóstico ejecutivo con los siguientes detalles:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Nombre del Participante:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getFullname()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Ocupación:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getOccupation()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Nombre de la Empresa:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getEnterpriseName()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Correo Electrónico de la Empresa:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getEnterpriseEmail()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Sector de la Empresa:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getEnterpriseSector()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Cantidad de Miembros en el Equipo:</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getTeamQuantity()).append("</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Especificación Adicional (Si corresponde):</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(leadResponse.getSpecifyOther() != null ? leadResponse.getSpecifyOther() : "No especificado").append("</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold; text-align: center;\">Respuestas del Diagnóstico:</p>");

        for (Option option : leadResponse.getAnswers()) {
            builder.append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Pregunta:</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(option.getQuestion().getValue()).append("</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold;\">Respuesta:</p>")
                    .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">").append(option.getValue()).append("</p>");
        }

        builder.append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"line-height: 1.5;\">Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p style=\"line-height: 1.5;\">© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("<tr>")
                .append("<td style=\"background-color: rgba(0, 0, 0, 0.1); padding: 20px; text-align: center; font-size: 12px; color: #666666;\">")
                .append("<p>Este es un mensaje automático, por favor no respondas a este correo.</p>")
                .append("<p>© 2025 Vocaltech. Todos los derechos reservados.</p>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</td>")
                .append("</tr>")
                .append("</table>")
                .append("</body>")
                .append("</html>");

        return builder.toString();
    }


}
