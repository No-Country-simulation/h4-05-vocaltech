package com.example.appointmentsystem.service;

import com.example.appointmentsystem.entity.Template;
import com.example.appointmentsystem.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiagnosisService {
    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private EmailService emailService;

    public handleDiagnosisCompletion(String email, List<String> selectedServices) {
        for (String service: selectedServices) {
            List<Template> templates = templateRepository.findTemplateByService(service);
                    if (!templates.isEmpty()) {
                        Template randomTemplate = templates.get(new Random().nextInt(templates.size()));
                        emailService.sendEmail(email randomTemplate.getSubject(), randomTemplate.getBody());
                    }
        }
    }
}