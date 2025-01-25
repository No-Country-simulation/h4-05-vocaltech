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
                .email(lead.getEmail())
                .fullname(lead.getFullname())
                .answers(lead.getAnswers())
                .isProposalSent(lead.isProposalSent())
                .build();
    }
}
