package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.EntrepreneurInputsException;
import vocaltech.demo.exception.ExecutiveInputsException;
import vocaltech.demo.persistence.entity.ExecutiveInputs;
import vocaltech.demo.persistence.repository.ExecutiveInputsRepository;
import vocaltech.demo.service.ExecutiveInputsService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExecutiveInputsServiceImpl implements ExecutiveInputsService {

    private final ExecutiveInputsRepository executiveInputsRepository;

    @Override
    public ExecutiveInputs save(ExecutiveInputs executiveInputs) {
        return this.executiveInputsRepository.save(executiveInputs);
    }

    @Override
    public ExecutiveInputs getExecutiveInputsById(Long id) {
        return this.executiveInputsRepository.findById(id)
                .orElseThrow(
                        ExecutiveInputsException::new
                );
    }


}
