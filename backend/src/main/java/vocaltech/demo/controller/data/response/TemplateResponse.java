package vocaltech.demo.controller.data.response;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TemplateResponse {

    private Long id;

    private Long role_id;

    private String title;

    private String subject;

    private String body;

    private Long option_id;
}
