package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.controller.data.response.OptionResponse;
import vocaltech.demo.exception.OptionNotFoundException;
import vocaltech.demo.mapper.OptionMapper;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.repository.OptionRepository;
import vocaltech.demo.service.OptionService;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OptionServiceImpl implements OptionService {

    private final OptionRepository optionRepository;
    private final OptionMapper optionMapper;

    @Override
    public List<OptionResponse> getOptions() {
        List<Option> optionList = this.optionRepository.findAll();
        return optionList.stream()
                .map(this.optionMapper::toOptionResponse).toList();
    }

    @Override
    public Set<Option> getOptions(Long[] optionsIds) {
        return Arrays.stream(optionsIds).map(optionId -> this.optionRepository.findById(optionId)
                        .orElseThrow(OptionNotFoundException::new))
                .collect(Collectors.toSet());
    }

    @Override
    public OptionResponse getOption(final Long id) {
        Option option = this.optionRepository.findById(id)
                .orElseThrow(OptionNotFoundException::new);
        return this.optionMapper.toOptionResponse(option);
    }
}
