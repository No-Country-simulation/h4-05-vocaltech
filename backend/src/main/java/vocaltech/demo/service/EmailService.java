package vocaltech.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

@Service
public class EmailService {

    @Value("${email.username}")
    private String FROM_EMAIL;

    @Value("${email.password}")
    private String FROM_PASSWORD;

    @Value("${email.host}")
    private String HOST;

    private final String FROM_NAME = "El equipo de Vocaltech";

    public void sendEmail(String to, String subject, String body) {
        Properties props = new Properties();
        props.put("mail.smtp.host", HOST);
        props.put("mail.smtp.port", "587"); //TLS Port
        props.put("mail.smtp.auth", "true"); //enable authentication
        props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS
        Authenticator auth = new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(FROM_EMAIL, FROM_PASSWORD);
            }
        };
        Session session = Session.getInstance(props, auth);
        try {
            MimeMessage msg = new MimeMessage(session);
            //set message headers
            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
            msg.addHeader("format", "flowed");
            msg.addHeader("Content-Transfer-Encoding", "8bit");
            msg.setFrom(new InternetAddress(FROM_EMAIL, FROM_NAME));
            msg.setReplyTo(InternetAddress.parse(FROM_EMAIL, false));
            msg.setSubject(subject, "UTF-8");
            msg.setContent(body, "text/html; charset=utf-8");
            msg.setSentDate(new Date());
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to, false));
            Transport.send(msg);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}