package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.mapper.FormMapper;
import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.exception.FormNotFoundException;
import vocaltech.demo.persistence.entity.Form;
import vocaltech.demo.persistence.repository.FormRepository;
import vocaltech.demo.service.FormService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FormServiceImpl implements FormService {

    private final FormRepository formRepository;
    private final FormMapper formMapper;

    @Override
    public List<FormResponse> getForms() {
        List<Form> formList = this.formRepository.findAll();
        return formList.stream()
                .map(this.formMapper::toFormResponse).toList();
    }

    @Override
    public FormResponse getForm(final Long id) {
        Form form = this.formRepository.findById(id)
                .orElseThrow(FormNotFoundException::new);
        return this.formMapper.toFormResponse(form);
    }

    @Override
    public Form getForm(Long profileId, Long serviceId) {
        return this.formRepository.findByProfileIdAndServiceId(profileId, serviceId)
                .orElseThrow(FormNotFoundException::new);
    }
}
