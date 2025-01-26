package com.example.appointmentsystem.controller;

import com.example.appointmentsystem.entity.Template;
import com.example.appointmentsystem.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/template")

public class TemplateController{

    @Autowired
    private TemplateService templateService;

    @PostMapping
    public ResponseEntity<Template> createTemplate(@RequestBody Template template) {
        return new ResponseEntity<>(templateService.createTemplate(template), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntityList<<Template> getAllTemplates() {
        return ResponseEntity.ok(templateService.getAllTemplates(Template));
    }

    @PutMapping(/{id})
    public ResponseEntity<Template> updateTemplate(@PathVariable Long id, @RequestBody Template template) {
        return ResposneEntity.ok(templateService.updateTemplate(id, template));
    }

    @DeleteMapping(/{id})
    public ResponseEntity<Void> deleteTemplate(@PathVariable Long id) {
        templateService.deleteTemplate(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{service}")
    public ResponseEntity<Template> getTemplateByService(@PathVariable String service) {
        return ResponseEntity.ok(templateService.getTemplateByService(service));
    }

}

