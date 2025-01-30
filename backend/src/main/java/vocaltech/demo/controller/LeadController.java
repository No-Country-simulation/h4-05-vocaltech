package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.AddPlanRequest;
import vocaltech.demo.controller.data.request.LeadRequest;
import vocaltech.demo.controller.data.response.LeadResponse;
import vocaltech.demo.email.EmailTemplates;
import vocaltech.demo.mapper.LeadMapper;
import vocaltech.demo.persistence.entity.*;
import vocaltech.demo.service.EmailService;
import vocaltech.demo.service.TemplateService;
import vocaltech.demo.service.implementation.*;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/leads")
@RequiredArgsConstructor
public class LeadController {

    private final FormServiceImpl formService;
    private final AdminDestinyServiceImpl adminDestinyService;
    private final RoleServiceImpl roleService;
    private final OptionServiceImpl optionService;
    private final EmailService emailService;

    private final LeadServiceImpl leadService;

    private final LeadMapper leadMapper;

    @PostMapping
    public ResponseEntity<LeadResponse> createLead(@RequestBody LeadRequest request) {

        /* Persist Lead */

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
                .build();

        lead = this.leadService.createLead(lead);
        LeadResponse response = this.leadMapper.toLeadResponse(lead);

        Set<Long> roleIds = this.adminDestinyService.getRoleIdsByFormId(lead.getForm().getId());

        Set<Role> roles = roleIds.stream().map(
                this.roleService::getRole
        ).collect(Collectors.toSet());

        response.setRoles(roles);

        /* Send Templates by email */

        List<Template> templates = answers.stream()
                .map(answer -> {
                    List<Template> templateList = answer.getTemplates().stream().toList();
                    return templateList.isEmpty() ? null : templateList.get(ThreadLocalRandom.current().nextInt(templateList.size()));
                })
                .filter(Objects::nonNull).toList();

        /* TODO SEND OPTIONS AND TEMPLATES BY EMAIL */
        if(!templates.isEmpty()){
            String emailTemplate = EmailTemplates.getDiagnosticResultsEmailTemplate(lead.getFullname(), templates);
            this.emailService.sendEmail(
                    lead.getEmail(),
                    "Resultado de Diagnóstico Vocaltech.",
                    emailTemplate);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        }



        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/add-plan")
    public ResponseEntity<LeadResponse> addPlanToLead(
            @PathVariable Long id,
            @RequestBody AddPlanRequest request
    ) {
        Lead lead = this.leadService.getLead(id);

        lead.setPlan(Plan.builder()
                .path(request.getPath())
                .build());

        lead = this.leadService.createLead(lead);

        LeadResponse response = this.leadMapper.toLeadResponse(lead);

        return ResponseEntity.ok(response);
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
