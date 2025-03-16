package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.EntrepreneurLeadRequest;
import vocaltech.demo.controller.data.request.ExecutiveLeadRequest;
import vocaltech.demo.controller.data.response.AllLeadsResponse;
import vocaltech.demo.controller.data.response.EntrepreneurLeadResponse;
import vocaltech.demo.controller.data.response.ExecutiveLeadResponse;
import vocaltech.demo.email.EmailTemplates;
import vocaltech.demo.mapper.LeadMapper;
import vocaltech.demo.persistence.entity.*;
import vocaltech.demo.service.EmailService;
import vocaltech.demo.service.implementation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/api/v1/leads")
@RequiredArgsConstructor
public class LeadController {
    private final RoleServiceImpl roleService;
    private final OptionServiceImpl optionService;
    private final EmailService emailService;
    private final LeadServiceImpl leadService;
    private final ProfileServiceImpl profileService;
    private final EntrepreneurInputsServiceImpl entrepreneurInputsService;

    private final ExecutiveInputsServiceImpl executiveInputsService;
    private final LeadMapper leadMapper;


    @PostMapping("/entrepreneur")
    public ResponseEntity<EntrepreneurLeadResponse> createEntrepreneurLead(
            @RequestBody EntrepreneurLeadRequest request
    ) {

        /* Persist Lead */

        Profile profile = this.profileService.getProfile(1L);

        EntrepreneurInputs entrepreneurInputs = EntrepreneurInputs.builder()
                .projectSectors(request.getProjectSector())
                .email(request.getEmail())
                .phone(request.getPhone())
                .build();
        entrepreneurInputs = this.entrepreneurInputsService.save(entrepreneurInputs);

        Set<Option> answers = this.optionService.getOptions(request.getSelectedOptions());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String creationDate = LocalDateTime.now().format(formatter);

        Lead lead = Lead.builder()
                .fullname(request.getFullname())
                .creationDate(creationDate)
                .profile(profile)
                .answers(answers)
                .voiceRecording(VoiceRecording.builder()
                        .path(request.getVoiceRecordingPath()).build()
                )
                .socialMedia(request.getSocialMedia())
                .profileInputsId(entrepreneurInputs.getId())
                .build();

        lead = this.leadService.createLead(lead);

        EntrepreneurLeadResponse response = this.leadMapper.toEntrepreneurLeadResponse(lead, entrepreneurInputs);

        /* Send Templates by email */

        List<Template> templates = answers.stream()
                .map(answer -> {
                    List<Template> templateList = answer.getTemplates().stream().toList();
                    return templateList.isEmpty() ? null : templateList.get(ThreadLocalRandom.current().nextInt(templateList.size()));
                })
                .filter(Objects::nonNull).toList();

        if (!templates.isEmpty()) {
            String emailTemplate = EmailTemplates.getDiagnosticResultsEmailTemplate(lead.getFullname(), templates);
            this.emailService.sendEmail(
                    response.getEmail(),
                    "Resultado de Diagnóstico Vocaltech.",
                    emailTemplate);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @PostMapping("/executive")
    public ResponseEntity<ExecutiveLeadResponse> createExecutiveLead(
            @RequestBody ExecutiveLeadRequest request
    ) {

        /* Persist Lead */

        Profile profile = this.profileService.getProfile(1L);

        ExecutiveInputs executiveInputs = ExecutiveInputs.builder()
                .occupation(request.getOccupation())
                .enterpriseName(request.getEnterpriseName())
                .enterpriseEmail(request.getEnterpriseEmail())
                .enterpriseSector(request.getEnterpriseSector())
                .teamQuantity(request.getTeamQuantity())
                .build();
        executiveInputs = this.executiveInputsService.save(executiveInputs);

        Set<Option> answers = this.optionService.getOptions(request.getSelectedOptions());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String creationDate = LocalDateTime.now().format(formatter);

        Lead lead = Lead.builder()
                .fullname(request.getFullname())
                .creationDate(creationDate)
                .profile(profile)
                .answers(answers)
                .voiceRecording(VoiceRecording.builder()
                        .path(request.getVoiceRecordingPath()).build()
                )
                .socialMedia(request.getSocialMedia())
                .profileInputsId(executiveInputs.getId())
                .build();

        lead = this.leadService.createLead(lead);

        ExecutiveLeadResponse response = this.leadMapper.toExecutiveLeadResponse(lead, executiveInputs);

        /* Send Templates by email */

        List<Template> templates = answers.stream()
                .map(answer -> {
                    List<Template> templateList = answer.getTemplates().stream().toList();
                    return templateList.isEmpty() ? null : templateList.get(ThreadLocalRandom.current().nextInt(templateList.size()));
                })
                .filter(Objects::nonNull).toList();

        if (!templates.isEmpty()) {
            String emailTemplate = EmailTemplates.getDiagnosticResultsEmailTemplate(lead.getFullname(), templates);
            this.emailService.sendEmail(
                    response.getEnterpriseEmail(),
                    "Resultado de Diagnóstico Vocaltech.",
                    emailTemplate);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity<AllLeadsResponse> getAllLeads() {

        List<Lead> leadList = this.leadService.getLeads();

        List<EntrepreneurLeadResponse> entrepreneurLeadResponses = leadList.stream()
                .filter(lead -> lead.getProfile().getId() == 1)
                .map(lead -> {
                    EntrepreneurInputs entrepreneurInputs = this.entrepreneurInputsService
                            .getEntrepreneurInputsById(lead.getProfileInputsId());
                    return this.leadMapper.toEntrepreneurLeadResponse(lead, entrepreneurInputs);

                }).toList();

        List<ExecutiveLeadResponse> executiveLeadResponses = leadList.stream()
                .filter(lead -> lead.getProfile().getId() == 2)
                .map(lead -> {
                    ExecutiveInputs executiveInputs = this.executiveInputsService
                            .getExecutiveInputsById(lead.getProfileInputsId());
                    return this.leadMapper.toExecutiveLeadResponse(lead, executiveInputs);

                }).toList();

        AllLeadsResponse response = AllLeadsResponse.builder()
                .entrepreneurLeads(entrepreneurLeadResponses)
                .executiveLeads(executiveLeadResponses)
                .build();

        return ResponseEntity.ok(response);
    }

}
