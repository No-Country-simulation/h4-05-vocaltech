package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.controller.data.request.ContactRequest;
import vocaltech.demo.persistence.entity.Contact;
import vocaltech.demo.persistence.repository.ContactRepository;
import vocaltech.demo.service.ContactService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {

        return this.contactRepository.save(contact);
    }

    @Override
    public List<Contact> listAllContacts() {
        return this.contactRepository.findAll();
    }
}
