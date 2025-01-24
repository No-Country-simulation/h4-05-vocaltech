package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.service.implementation.FormServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/forms")
@RequiredArgsConstructor
public class FormController {

    private final FormServiceImpl formService;

    @GetMapping
    public ResponseEntity<List<FormResponse>> getForms() {
        List<FormResponse> response = this.formService.getForms();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormResponse> getForm(@PathVariable Long id) {
        FormResponse response = this.formService.getForm(id);
        return ResponseEntity.ok(response);
    }
}
