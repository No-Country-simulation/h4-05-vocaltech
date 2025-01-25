package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LeadRequest {

    private Long profileId;
    private Long serviceId;
    private Long[] selectedOptions;
    private String voiceRecordingPath;
    private String fullname;
    private String email;

}
