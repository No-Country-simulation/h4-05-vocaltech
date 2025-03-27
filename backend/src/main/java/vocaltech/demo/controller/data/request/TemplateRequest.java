package vocaltech.demo.controller.data.request;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TemplateRequest {

    private Long role_id;

    private String title;

    private String subject;

    private String body;

    private Long optionId;
}
