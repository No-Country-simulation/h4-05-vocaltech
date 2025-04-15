package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterUserRequest {
    private String fullname;
    private String email;
    private String password;
    private Long roleId;
}
