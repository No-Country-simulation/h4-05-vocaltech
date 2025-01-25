package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.request.RegisterUserRequest;
import vocaltech.demo.controller.data.response.RegisterUserResponse;
import vocaltech.demo.persistence.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toUser(RegisterUserRequest request);

    RegisterUserResponse toRegisterUserResponse(User user);
}
