package vocaltech.demo.service;

import vocaltech.demo.controller.data.response.OptionResponse;
import vocaltech.demo.persistence.entity.Option;

import java.util.List;
import java.util.Set;

public interface OptionService {

    List<OptionResponse> getOptions();

    Set<Option> getOptions(Long[] optionsIds);

    OptionResponse getOption(Long id);

}
