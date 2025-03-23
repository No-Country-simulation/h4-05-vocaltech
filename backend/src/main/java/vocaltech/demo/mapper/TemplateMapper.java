package vocaltech.demo.mapper;

import org.springframework.stereotype.Component;
import vocaltech.demo.controller.data.request.TemplateRequest;
import vocaltech.demo.controller.data.response.TemplateResponse;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Template;

@Component
public class TemplateMapper {

    public Template toTemplate(TemplateRequest request, Option option){
        return Template.builder()
                .title(request.getTitle())
                .subject(request.getSubject())
                .body(request.getBody())
                .role_id(request.getRole_id())
                .option(option)
                .build();
    }

    public TemplateResponse toTemplateResponse(Template template){
        return TemplateResponse.builder()
                .id(template.getId())
                .title(template.getTitle())
                .subject(template.getSubject())
                .body(template.getBody())
                .role_id(template.getRole_id())
                .optionId(template.getOption().getId())
                .build();
    }
}
