package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExecutiveLeadRequest {

    private Long[] selectedOptions;
    private String voiceRecordingPath;
    private String fullname;
    private String socialMedia;
    private String occupation;
    private String enterpriseName;
    private String enterpriseEmail;
    private String enterpriseSector;
    private int teamQuantity;

}
