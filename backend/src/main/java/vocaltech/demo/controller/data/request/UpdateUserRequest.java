package vocaltech.demo.controller.data.request;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserRequest {
    private Long roleId;
    private String email;
    private String fullname;
}
