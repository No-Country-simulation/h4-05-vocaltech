package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.response.ServiceResponse;
import vocaltech.demo.persistence.entity.Service;

@Mapper(componentModel = "spring")
public interface ServiceMapper {

    ServiceResponse toServiceResponse(Service service);

}
