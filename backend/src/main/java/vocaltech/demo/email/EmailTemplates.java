package vocaltech.demo.email;


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
                .append("<img src=\"https://frontend-three-sigma-96.vercel.app/images/empresas.jpg\" alt=\"Banner de Vocaltech\" style=\"width: 100%; height: 150px; object-fit: cover; object-position: center; display: block;\">")
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
                .append("<h2 style=\"color: #4C51BF; font-size: 24px; margin-bottom: 20px; text-align: center;\">Resultados de tu diagnóstico</h2>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Estimado/a ").append(fullName).append(",</p>")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Gracias por completar el diagnóstico. A continuación, te enviamos las recomendaciones basadas en tus respuestas:</p>");

        for (Template template : selectedTemplates) {
            builder.append("<h3 style=\"color: #4C51BF; font-size: 20px; margin-top: 20px;\">")
                    .append(template.getTitle())
                    .append("</h3>")
                    .append("<p style=\"margin-bottom: 15px; line-height: 1.5;\"><strong>Asunto:</strong> ")
                    .append(template.getSubject())
                    .append("</p>")
                    .append("<p style=\"margin-bottom: 15px; line-height: 1.5;\">")
                    .append(template.getBody())
                    .append("</p>");
        }

        builder.append("<p style=\"margin-bottom: 20px; line-height: 1.5;\">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>")
                .append("<hr style=\"border: 0; height: 1px; background: #ccc; margin: 30px 0;\">")
                .append("<p style=\"margin-bottom: 20px; line-height: 1.5; font-weight: bold; text-align: center;\">Además, si deseas una asesoría personalizada, puedes agendar una cita con nuestro equipo:</p>")
                .append("<p style=\"text-align: center;\"><a href=\"https://frontend-three-sigma-96.vercel.app/agendar-cita\" style=\"display: inline-block; padding: 12px 24px; background-color: #4C51BF; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px; font-weight: bold;\">Agendar una Cita</a></p>")
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


}
