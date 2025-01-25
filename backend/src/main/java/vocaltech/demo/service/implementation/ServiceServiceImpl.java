package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.controller.data.response.ServiceResponse;
import vocaltech.demo.exception.ServiceNotFoundException;
import vocaltech.demo.mapper.ServiceMapper;
import vocaltech.demo.persistence.repository.ServiceRepository;
import vocaltech.demo.service.ServiceService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;
    private final ServiceMapper serviceMapper;

    @Override
    public List<ServiceResponse> getServices() {
        List<vocaltech.demo.persistence.entity.Service> serviceList = this.serviceRepository.findAll();
        return serviceList.stream()
                .map(this.serviceMapper::toServiceResponse).toList();
    }

    @Override
    public ServiceResponse getService(Long id) {
        vocaltech.demo.persistence.entity.Service service = this.serviceRepository.findById(id)
                .orElseThrow(ServiceNotFoundException::new);
        return this.serviceMapper.toServiceResponse(service);
    }
}
