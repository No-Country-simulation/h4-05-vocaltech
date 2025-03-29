package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.ContactRequest;
import vocaltech.demo.mapper.ContactMapper;
import vocaltech.demo.persistence.entity.Contact;
import vocaltech.demo.service.implementation.ContactServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactServiceImpl contactService;
    private final ContactMapper contactMapper;

    @PostMapping
    public ResponseEntity<Contact> sendContactForm(
            @RequestBody ContactRequest request
    ) {
        Contact contact = this.contactMapper.toContact(request);

        contact = this.contactService.saveContact(contact);

        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Contact>> listAllContacts() {
        List<Contact> contacts = this.contactService.listAllContacts();

        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }
}
