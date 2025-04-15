package vocaltech.demo.controller.data.response;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServiceResponse {
    private Long id;
    private String value;
}
