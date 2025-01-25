package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vocaltech.demo.controller.data.response.ServiceResponse;
import vocaltech.demo.service.implementation.ServiceServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceServiceImpl serviceService;

    @GetMapping
    public ResponseEntity<List<ServiceResponse>> getServices() {
        List<ServiceResponse> response = this.serviceService.getServices();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceResponse> getService(@PathVariable Long id) {
        ServiceResponse response = this.serviceService.getService(id);
        return ResponseEntity.ok(response);
    }


}
