package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.ExecutiveInputs;

import java.util.List;

public interface ExecutiveInputsService {

    ExecutiveInputs save(ExecutiveInputs executiveInputs);

    ExecutiveInputs getExecutiveInputsById(Long id);
}
