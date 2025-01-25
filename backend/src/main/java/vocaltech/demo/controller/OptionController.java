package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.controller.data.response.OptionResponse;
import vocaltech.demo.service.implementation.OptionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/options")
@RequiredArgsConstructor
public class OptionController {

    private final OptionServiceImpl optionService;

    @GetMapping
    public ResponseEntity<List<OptionResponse>> getOptions() {
        List<OptionResponse> response = this.optionService.getOptions();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OptionResponse> getOption(@PathVariable Long id) {
        OptionResponse response = this.optionService.getOption(id);
        return ResponseEntity.ok(response);
    }
}
