package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.LeadNotFoundException;
import vocaltech.demo.persistence.entity.Lead;
import vocaltech.demo.persistence.repository.LeadRepository;
import vocaltech.demo.service.LeadService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeadServiceImpl implements LeadService {

    private final LeadRepository leadRepository;

    @Override
    public Lead createLead(Lead lead) {
        return this.leadRepository.save(lead);
    }

    @Override
    public List<Lead> getLeads() {
        return this.leadRepository.findAll();
    }

    @Override
    public Lead getLead(Long id) {
        return this.leadRepository.findById(id).orElseThrow(
                LeadNotFoundException::new
        );
    }
}
