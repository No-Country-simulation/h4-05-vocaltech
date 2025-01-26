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
public class LeadResponse {

    private Long id;
    private Profile profile;
    private String fullname;
    private String email;
    private Set<Option> answers;
    private boolean isProposalSent;

}
