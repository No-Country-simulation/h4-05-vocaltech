package vocaltech.demo.service;

import vocaltech.demo.controller.data.response.ServiceResponse;

import java.util.List;

public interface ServiceService {

    List<ServiceResponse> getServices();

    ServiceResponse getService(Long id);
}
