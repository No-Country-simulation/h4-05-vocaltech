package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.Contact;

import java.util.List;

public interface ContactService {

    Contact saveContact(Contact contact);

    List<Contact> listAllContacts();
}
