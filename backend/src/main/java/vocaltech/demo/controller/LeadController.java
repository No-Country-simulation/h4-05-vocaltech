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
import java.util.Arrays;
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

    private final UserDetailsServiceImpl userDetailsService;


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

        Long[] optionsLong = Arrays.stream(request.getSelectedOptions())
                .mapToObj(Long::valueOf)
                .toArray(Long[]::new);

        Set<Option> answers = this.optionService.getOptions(optionsLong);

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

        /* Send email with the diagnostic results */

        List<Template> templates = answers.stream()
                .map(answer -> {
                    List<Template> templateList = answer.getTemplates().stream().toList();
                    return templateList.isEmpty() ? null : templateList.get(ThreadLocalRandom.current().nextInt(templateList.size()));
                })
                .filter(Objects::nonNull).toList();

        String emailTemplate1 = "";

        if (templates.isEmpty())
            emailTemplate1 = EmailTemplates.getDiagnosticReceivedEmailTemplate(lead.getFullname());

        if (!templates.isEmpty())
            emailTemplate1 = EmailTemplates.getDiagnosticResultsEmailTemplate(lead.getFullname(), templates);

        this.emailService.sendEmail(
                response.getEmail(),
                "Resultado de diagnóstico Vocaltech.",
                emailTemplate1);

        /* Send email to admins to notify a new diagnostic submission */

        /*String emailTemplate2 = EmailTemplates.getNewEntrepreneurDiagnosticReceivedEmailTemplate(response);

        List<User> users = this.userDetailsService.getUsers();
        List<String> adminEmails = users.stream().map(User::getEmail).toList();

        adminEmails.forEach(adminEmail ->
                this.emailService.sendEmail(
                        adminEmail,
                        "Nuevo diagnóstico de emprendedor recibido.",
                        emailTemplate2
                )
        );*/

        return ResponseEntity.status(HttpStatus.CREATED).body(response);

    }

    @PostMapping("/executive")
    public ResponseEntity<ExecutiveLeadResponse> createExecutiveLead(
            @RequestBody ExecutiveLeadRequest request
    ) {

        System.out.println(request.getSpecifyOther());

        /* Persist Lead */

        Profile profile = this.profileService.getProfile(2L);

        ExecutiveInputs executiveInputs = ExecutiveInputs.builder()
                .occupation(request.getOccupation())
                .enterpriseName(request.getEnterpriseName())
                .enterpriseEmail(request.getEnterpriseEmail())
                .enterpriseSector(request.getEnterpriseSector())
                .teamQuantity(request.getTeamQuantity())
                .specifyOther(request.getSpecifyOther())
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

        /* Send email with the diagnostic results */

        List<Template> templates = answers.stream()
                .map(answer -> {
                    List<Template> templateList = answer.getTemplates().stream().toList();
                    return templateList.isEmpty() ? null : templateList.get(ThreadLocalRandom.current().nextInt(templateList.size()));
                })
                .filter(Objects::nonNull).toList();

        String emailTemplate1 = "";

        if (templates.isEmpty())
            emailTemplate1 = EmailTemplates.getDiagnosticReceivedEmailTemplate(lead.getFullname());

        if (!templates.isEmpty())
            emailTemplate1 = EmailTemplates.getDiagnosticResultsEmailTemplate(lead.getFullname(), templates);

        this.emailService.sendEmail(
                response.getEnterpriseEmail(),
                "Resultado de diagnóstico Vocaltech.",
                emailTemplate1);

        /* Send email to admins to notify a new diagnostic submission */

        /*String emailTemplate2 = EmailTemplates.getNewExecutiveDiagnosticReceivedEmailTemplate(response);

        List<User> users = this.userDetailsService.getUsers();
        List<String> adminEmails = users.stream().map(User::getEmail).toList();

        adminEmails.forEach(adminEmail ->
                this.emailService.sendEmail(
                        adminEmail,
                        "Nuevo diagnóstico de ejecutivo recibido.",
                        emailTemplate2
                )
        );*/

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
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
