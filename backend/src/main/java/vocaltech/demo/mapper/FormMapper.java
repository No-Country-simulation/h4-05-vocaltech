package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.persistence.entity.Form;

@Mapper(componentModel = "spring")
public interface FormMapper {
    FormResponse toFormResponse(Form form);
}
