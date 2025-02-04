package vocaltech.demo.mapper;

import org.springframework.stereotype.Component;
import vocaltech.demo.controller.data.response.LeadResponse;
import vocaltech.demo.persistence.entity.Lead;

@Component
public class LeadMapper {
    public LeadResponse toLeadResponse(Lead lead){
        return LeadResponse.builder()
                .id(lead.getId())
                .profile(lead.getForm().getProfile())
                .service(lead.getForm().getService())
                .name(lead.getFullname())
                .email(lead.getEmail())
                .answers(lead.getAnswers())
                .diagnostic(lead.isDiagnostic())
                .creationDate(lead.getCreationDate())
                .voiceRecordingPath(lead.getVoiceRecording().getPath())
                .build();
    }
}
