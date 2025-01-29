package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.Option;

import java.util.List;
import java.util.Set;

public interface OptionService {

    List<Option> getOptions();

    Set<Option> getOptions(Long[] optionsIds);

    Option getOption(Long id);

}
