package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Role;

import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterUserResponse {
    private Long id;
    private String fullname;
    private String email;
    private Set<Role> roles;
}
