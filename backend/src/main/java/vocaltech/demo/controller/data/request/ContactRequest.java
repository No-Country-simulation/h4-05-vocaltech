package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactRequest {

    private String name;
    private String email;
    private String topic;
    private String message;
}
