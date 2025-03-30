package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
