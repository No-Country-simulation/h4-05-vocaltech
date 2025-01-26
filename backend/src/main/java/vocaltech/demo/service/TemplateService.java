package vocaltech.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.TemplateNotFoundException;
import vocaltech.demo.persistence.entity.Template;
import vocaltech.demo.persistence.repository.TemplateRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TemplateService {

    @Autowired
    private TemplateRepository templateRepository;

    public List<Template> getAllTemplates() {
        return this.templateRepository.findAll();
    }

    public Optional<Template> getTemplateById(Long id){
        return templateRepository.findById(id);
    }

    public Template createTemplate(Template template) {
        return templateRepository.save(template);
    }

    public Template updateTemplate(Long id, Template template) {
        Template existingTemplate = templateRepository.findById(id)
                .orElseThrow(TemplateNotFoundException::new);
        existingTemplate.setTitle(template.getTitle());
        existingTemplate.setSubject(template.getSubject());
        existingTemplate.setBody(template.getBody());

        return templateRepository.save(existingTemplate);
    }

    /*public Template getTemplateByService(Service service) {
        return templateRepository.findByService(service)
                .orElseThrow(TemplateNotFoundException::new);
    }*/

    public void deleteTemplate(Long id) {
        if (!templateRepository.existsById(id)) throw new TemplateNotFoundException();
        this.templateRepository.deleteById(id);
    }
}