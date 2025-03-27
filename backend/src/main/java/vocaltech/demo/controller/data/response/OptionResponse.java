package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Question;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OptionResponse {
    private Long id;
    private Question question;
    private String value;
}
