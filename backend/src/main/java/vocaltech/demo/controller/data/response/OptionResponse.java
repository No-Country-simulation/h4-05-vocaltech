package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Service;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OptionResponse {
    private Long id;
    private Service service;
    private String value;
}
