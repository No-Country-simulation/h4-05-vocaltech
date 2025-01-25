package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Profile;
import vocaltech.demo.persistence.entity.Service;

import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FormResponse {
    private Long id;
    private String name;
    private Profile profile;
    private Service service;
    private Set<Option> checkList;
}
