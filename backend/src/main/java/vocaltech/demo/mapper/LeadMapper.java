package vocaltech.demo.mapper;

import org.springframework.stereotype.Component;
import vocaltech.demo.controller.data.response.EntrepreneurLeadResponse;
import vocaltech.demo.controller.data.response.ExecutiveLeadResponse;
import vocaltech.demo.persistence.entity.EntrepreneurInputs;
import vocaltech.demo.persistence.entity.ExecutiveInputs;
import vocaltech.demo.persistence.entity.Lead;

@Component
public class LeadMapper {

    public EntrepreneurLeadResponse toEntrepreneurLeadResponse(
            Lead lead,
            EntrepreneurInputs entrepreneurInputs
    ) {
        return EntrepreneurLeadResponse.builder()
                .id(lead.getId())
                .profile(lead.getProfile())
                .fullname(lead.getFullname())
                .socialMedia(lead.getSocialMedia())
                .creationDate(lead.getCreationDate())
                .answers(lead.getAnswers())
                .voiceRecordingPath(lead.getVoiceRecording().getPath())
                .projectSector(entrepreneurInputs.getProjectSectors())
                .email(entrepreneurInputs.getEmail())
                .phone(entrepreneurInputs.getPhone())
                .build();
    }

    public ExecutiveLeadResponse toExecutiveLeadResponse(
            Lead lead,
            ExecutiveInputs executiveInputs
    ) {
        return ExecutiveLeadResponse.builder()
                .id(lead.getId())
                .profile(lead.getProfile())
                .fullname(lead.getFullname())
                .socialMedia(lead.getSocialMedia())
                .creationDate(lead.getCreationDate())
                .answers(lead.getAnswers())
                .voiceRecordingPath(lead.getVoiceRecording().getPath())
                .occupation(executiveInputs.getOccupation())
                .enterpriseName(executiveInputs.getEnterpriseName())
                .enterpriseEmail(executiveInputs.getEnterpriseEmail())
                .enterpriseSector(executiveInputs.getEnterpriseSector())
                .teamQuantity(executiveInputs.getTeamQuantity())
                .specifyOther(executiveInputs.getSpecifyOther())
                .build();
    }
}
