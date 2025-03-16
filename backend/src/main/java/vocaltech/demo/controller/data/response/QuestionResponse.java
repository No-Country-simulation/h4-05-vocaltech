package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Service;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponse {
    private Long id;
    private String value;
    private Service service;
}
