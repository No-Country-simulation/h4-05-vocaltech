package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.LeadRequest;
import vocaltech.demo.controller.data.response.LeadResponse;
import vocaltech.demo.mapper.LeadMapper;
import vocaltech.demo.persistence.entity.Form;
import vocaltech.demo.persistence.entity.Lead;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.VoiceRecording;
import vocaltech.demo.service.implementation.FormServiceImpl;
import vocaltech.demo.service.implementation.LeadServiceImpl;
import vocaltech.demo.service.implementation.OptionServiceImpl;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/leads")
@RequiredArgsConstructor
public class LeadController {

    private final FormServiceImpl formService;
    private final OptionServiceImpl optionService;

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
                .isProposalSent(false)
                .build();
        lead = this.leadService.createLead(lead);
        LeadResponse response = this.leadMapper.toLeadResponse(lead);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<LeadResponse>> getLeads() {
        List<Lead> leadList = this.leadService.getLeads();
        List<LeadResponse> response = leadList.stream()
                .map(this.leadMapper::toLeadResponse).toList();
        return ResponseEntity.ok(response);
    }
}
