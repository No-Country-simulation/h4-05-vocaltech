package com.example.appointmentsystem.service;

import com.example.appointmentsystem.entity.Template;
import com.example.appointmentsystem.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TemplateService {

    @Autowired
    private TemplateRepository templateRepository;

    public List<Template> getAllTemplates {
        return templateRepository.findAll();
    }

    public Optional<Template> getTemplateById(Long id){
        return templateRepository.findById(id)
    }

    public Template createTemplate(Template template) {
        return templateRepository.save(template)
    }

    public Template updateTemplate(Long id, Template template) {
        Template existingTemplate = templateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template not found"));

        existingTemplate.setTitle(template.getTitle());
        existingTemplate.setSubject(template.getSubject());
        existingTemplate.setBody(template.getBody());

        return templateRepository.save(existingTemplate)
    }

    public Template getTemplateByService(String service) {
        return templateRepository.findByService(service)
                .orElseThrow(() -> new ResourceNotFoundException("Template not found"))
    }

    public void deleteTemplate(Long id) {
        if (!templateRepository.existsById(id)) {
            throw new ResourceNotFoundException("Template not found");
        }
        return templateRepository.deleteById(id)
    }
}