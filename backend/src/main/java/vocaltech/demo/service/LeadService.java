package vocaltech.demo.service;

import vocaltech.demo.controller.data.response.LeadResponse;
import vocaltech.demo.persistence.entity.Lead;

import java.util.List;

public interface LeadService {

    Lead createLead(Lead lead);
    List<Lead> getLeads();
    Lead getLead(Long id);

}
