package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.EntrepreneurInputs;

import java.util.List;

public interface EntrepreneurInputsService {

    EntrepreneurInputs save(EntrepreneurInputs entrepreneurInputs);

    EntrepreneurInputs getEntrepreneurInputsById(Long id);
}
