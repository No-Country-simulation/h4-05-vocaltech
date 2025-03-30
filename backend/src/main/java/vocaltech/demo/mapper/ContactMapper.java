package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.request.ContactRequest;
import vocaltech.demo.persistence.entity.Contact;

@Mapper(componentModel = "spring")
public interface ContactMapper {
    Contact toContact(ContactRequest request);
}
