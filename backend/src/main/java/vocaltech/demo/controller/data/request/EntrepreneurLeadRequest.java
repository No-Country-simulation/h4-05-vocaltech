package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EntrepreneurLeadRequest {
    private int[] selectedOptions;
    private String voiceRecordingPath;
    private String fullname;
    private String socialMedia;
    private String projectSector;
    private String email;
    private String phone;
}
