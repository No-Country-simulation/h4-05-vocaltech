package vocaltech.demo.service;

import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.persistence.entity.Form;

import java.util.List;

public interface FormService {

    List<FormResponse> getForms();
    FormResponse getForm(Long id);

    Form getForm(Long profileId, Long serviceId);

}
