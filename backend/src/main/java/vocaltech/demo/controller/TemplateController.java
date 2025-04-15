package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.TemplateRequest;
import vocaltech.demo.controller.data.response.TemplateResponse;
import vocaltech.demo.mapper.TemplateMapper;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Template;
import vocaltech.demo.service.TemplateService;
import vocaltech.demo.service.implementation.OptionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/templates")
@RequiredArgsConstructor
public class TemplateController {

    private final TemplateService templateService;
    private final OptionServiceImpl optionService;
    private final TemplateMapper templateMapper;

    @PostMapping
    public ResponseEntity<TemplateResponse> createTemplate(@RequestBody TemplateRequest request) {
        Option option = this.optionService.getOption(request.getOption_id());

        Template template = this.templateMapper.toTemplate(request, option);

        template = this.templateService.createTemplate(template);

        TemplateResponse response = this.templateMapper.toTemplateResponse(template);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TemplateResponse>> getAllTemplates() {
        List<Template> templateList = this.templateService.getAllTemplates();

        List<TemplateResponse> response = templateList.stream().map(
                this.templateMapper::toTemplateResponse
        ).toList();

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TemplateResponse> updateTemplate(@PathVariable Long id, @RequestBody TemplateRequest request) {
        Option option = this.optionService.getOption(request.getOption_id());

        Template template = this.templateMapper.toTemplate(request, option);

        template = this.templateService.updateTemplate(id, template);

        TemplateResponse response = this.templateMapper.toTemplateResponse(template);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTemplate(@PathVariable Long id) {
        templateService.deleteTemplate(id);
        return ResponseEntity.noContent().build();
    }

}

