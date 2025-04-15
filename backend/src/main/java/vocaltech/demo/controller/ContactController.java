package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.ContactRequest;
import vocaltech.demo.email.EmailTemplates;
import vocaltech.demo.mapper.ContactMapper;
import vocaltech.demo.persistence.entity.Contact;
import vocaltech.demo.persistence.entity.User;
import vocaltech.demo.service.EmailService;
import vocaltech.demo.service.implementation.ContactServiceImpl;
import vocaltech.demo.service.implementation.UserDetailsServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactServiceImpl contactService;
    private final ContactMapper contactMapper;
    private final EmailService emailService;
    private final UserDetailsServiceImpl userDetailsService;

    @PostMapping
    public ResponseEntity<Contact> sendContactForm(
            @RequestBody ContactRequest request
    ) {

        Contact contact = this.contactMapper.toContact(request);

        contact = this.contactService.saveContact(contact);

        List<User> users = this.userDetailsService.getUsers();

        List<String> adminEmails = users.stream().map(User::getEmail).toList();

        /* Notify user of successful query sended */
        String emailTemplate1 = EmailTemplates.getNewQueryNotificationEmailTemplate(contact.getEmail());
        this.emailService.sendEmail(
                contact.getEmail(),
                "Su consulta ha sido enviada al equipo de Vocaltech.",
                emailTemplate1
        );

        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Contact>> listAllContacts() {
        List<Contact> contacts = this.contactService.listAllContacts();

        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }
}
