package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.LeadRequest;
import vocaltech.demo.controller.data.response.LeadResponse;
import vocaltech.demo.mapper.LeadMapper;
import vocaltech.demo.persistence.entity.*;
import vocaltech.demo.service.EmailService;
import vocaltech.demo.service.TemplateService;
import vocaltech.demo.service.implementation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/leads")
@RequiredArgsConstructor
public class LeadController {

    private final FormServiceImpl formService;
    private final AdminDestinyServiceImpl adminDestinyService;
    private final RoleServiceImpl roleService;
    private final OptionServiceImpl optionService;
    private final TemplateService templateService;
    private final EmailService emailService;

    private final LeadServiceImpl leadService;

    private final LeadMapper leadMapper;

    @PostMapping
    public ResponseEntity<LeadResponse> createLead(@RequestBody LeadRequest request) {
        Form form = this.formService.getForm(request.getProfileId(), request.getServiceId());

        Set<Option> answers = this.optionService.getOptions(request.getSelectedOptions());

        Lead lead = Lead.builder()
                .form(form)
                .answers(answers)
                .email(request.getEmail())
                .voiceRecording(VoiceRecording.builder()
                        .path(request.getVoiceRecordingPath()).build()
                )
                .diagnostic(true)
                .fullname(request.getFullname())
                .isProposalSent(false)
                .build();

        lead = this.leadService.createLead(lead);
        LeadResponse response = this.leadMapper.toLeadResponse(lead);

        Set<Long> roleIds = this.adminDestinyService.getRoleIdsByFormId(lead.getForm().getId());

        Set<Role> roles = roleIds.stream().map(
                this.roleService::getRole
        ).collect(Collectors.toSet());

        response.setRoles(roles);

        /* TODO SEND OPTIONS AND TEMPLATES BY EMAIL */

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<LeadResponse>> getLeads() {
        List<Lead> leadList = this.leadService.getLeads();

        List<LeadResponse> response = leadList.stream().map(lead ->
                {
                    Set<Long> roleIds = this.adminDestinyService.getRoleIdsByFormId(lead.getForm().getId());

                    Set<Role> roles = roleIds.stream().map(
                            this.roleService::getRole
                    ).collect(Collectors.toSet());

                    LeadResponse leadResponse = this.leadMapper.toLeadResponse(lead);
                    leadResponse.setRoles(roles);
                    return leadResponse;
                }
        ).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }
}
