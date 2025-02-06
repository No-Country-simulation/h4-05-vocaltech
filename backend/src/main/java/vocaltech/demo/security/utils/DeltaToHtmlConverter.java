package vocaltech.demo.security.utils;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DeltaToHtmlConverter {

    public static String convertDeltaToHtml(String deltaJson) {
        StringBuilder html = new StringBuilder();
        JSONObject deltaObj = new JSONObject(deltaJson);
        JSONArray ops = deltaObj.getJSONArray("ops");

        boolean inParagraph = false;

        for (int i = 0; i < ops.length(); i++) {
            JSONObject op = ops.getJSONObject(i);

            // Verificar si `insert` es un objeto (imagen o video)
            if (op.get("insert") instanceof JSONObject) {
                if (inParagraph) {
                    html.append("</p>");
                    inParagraph = false;
                }

                JSONObject insertObj = op.getJSONObject("insert");

                // Si es una imagen
                if (insertObj.has("image")) {
                    String imageUrl = insertObj.getString("image");
                    html.append("<img src='").append(imageUrl)
                            .append("' alt='Imagen' style='max-width: 100%;' />");
                }

                // Si es un video
                if (insertObj.has("video")) {
                    String videoUrl = insertObj.getString("video");
                    String videoId = getYouTubeId(videoUrl);
                    if (videoId != null) {
                        String thumbnailUrl = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
                        html.append("<a href='").append(videoUrl)
                                .append("' target='_blank'><img src='").append(thumbnailUrl)
                                .append("' alt='Video' style='max-width: 100%;' /></a>");
                    } else {
                        html.append("<a href='").append(videoUrl).append("' target='_blank'>Ver video</a>");
                    }
                }

                continue; // Evitar procesar más atributos
            }

            // Si `insert` es texto normal
            String text = op.getString("insert");

            // Convertir saltos de línea en <br>
            text = text.replace("\n", "<br>");

            if (text.equals("\n")) {
                if (inParagraph) {
                    html.append("</p>");
                    inParagraph = false;
                }
                continue; // Evitar saltos de línea vacíos
            }

            if (!inParagraph) {
                html.append("<p>");
                inParagraph = true;
            }

            if (op.has("attributes")) {
                JSONObject attrs = op.getJSONObject("attributes");

                // Formatos básicos
                if (attrs.has("bold")) text = "<b>" + text + "</b>";
                if (attrs.has("italic")) text = "<i>" + text + "</i>";
                if (attrs.has("underline")) text = "<u>" + text + "</u>";
                if (attrs.has("strike")) text = "<s>" + text + "</s>";

                // Enlaces
                if (attrs.has("link")) {
                    text = "<a href='" + attrs.getString("link") + "' target='_blank'>" + text + "</a>";
                }

                // Color y fondo
                if (attrs.has("color")) {
                    text = "<span style='color: " + attrs.getString("color") + ";'>" + text + "</span>";
                }
                if (attrs.has("background")) {
                    text = "<span style='background-color: " + attrs.getString("background") + ";'>" + text + "</span>";
                }

                if (attrs.has("size")) {
                    String size = attrs.getString("size");
                    String fontSize = "medium"; // Valor por defecto

                    // Asignar tamaño en base a la opción seleccionada
                    switch (size) {
                        case "small":
                            fontSize = "12px";
                            break;
                        case "huge":
                            fontSize = "24px";
                            break;
                        case "large":
                            fontSize = "18px";
                            break;
                        // "false" es el valor por defecto, no aplica tamaño
                    }

                    text = "<span style='font-size: " + fontSize + ";'>" + text + "</span>";
                }
            }

            html.append(text);
        }



        if (inParagraph) {
            html.append("</p>");
        }

        return html.toString();
    }

    // Método para extraer el ID del video de YouTube
    public static String getYouTubeId(String url) {
        String pattern = "(?:youtube\\.com\\/.*[?&]v=|youtu\\.be\\/|youtube\\.com\\/embed\\/)([a-zA-Z0-9_-]{11})";
        Pattern compiledPattern = Pattern.compile(pattern);
        Matcher matcher = compiledPattern.matcher(url);
        return matcher.find() ? matcher.group(1) : null;
    }
}
