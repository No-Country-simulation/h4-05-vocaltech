package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.response.OptionResponse;
import vocaltech.demo.persistence.entity.Option;

@Mapper(componentModel = "spring")
public interface OptionMapper {

    OptionResponse toOptionResponse(Option option);
}
