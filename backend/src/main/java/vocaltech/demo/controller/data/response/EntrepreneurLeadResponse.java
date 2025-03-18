package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Profile;
import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EntrepreneurLeadResponse {

    private Long id;
    private Profile profile;
    private String fullname;
    private String socialMedia;
    private String creationDate;
    private Set<Option> answers;
    private String voiceRecordingPath;
    private String projectSector;
    private String email;
    private String phone;
}
