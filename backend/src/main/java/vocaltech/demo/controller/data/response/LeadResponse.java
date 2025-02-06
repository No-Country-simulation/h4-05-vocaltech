package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Profile;
import vocaltech.demo.persistence.entity.Role;
import vocaltech.demo.persistence.entity.Service;

import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LeadResponse {

    private Long id;
    private Profile profile;
    private Service service;
    private String name;
    private String email;
    private Set<Option> answers;
    private boolean diagnostic;
    private Set<Role> roles;
    private String creationDate;
    private String voiceRecordingPath;

}
