package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.EntrepreneurInputsException;
import vocaltech.demo.exception.LeadNotFoundException;
import vocaltech.demo.persistence.entity.EntrepreneurInputs;
import vocaltech.demo.persistence.repository.EntrepreneurInputsRepository;
import vocaltech.demo.service.EntrepreneurInputsService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EntrepreneurInputsServiceImpl implements EntrepreneurInputsService {

    private final EntrepreneurInputsRepository entrepreneurInputsRepository;

    @Override
    public EntrepreneurInputs save(EntrepreneurInputs entrepreneurInputs) {
        return this.entrepreneurInputsRepository.save(entrepreneurInputs);
    }

    @Override
    public EntrepreneurInputs getEntrepreneurInputsById(Long id) {
        return this.entrepreneurInputsRepository.findById(id)
                .orElseThrow(
                        EntrepreneurInputsException::new
                );
    }


}
