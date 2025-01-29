package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vocaltech.demo.controller.data.response.FormResponse;
import vocaltech.demo.controller.data.response.OptionResponse;
import vocaltech.demo.mapper.OptionMapper;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.service.implementation.OptionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/options")
@RequiredArgsConstructor
public class OptionController {

    private final OptionServiceImpl optionService;
    private final OptionMapper optionMapper;

    @GetMapping
    public ResponseEntity<List<OptionResponse>> getOptions() {
        List<Option> optionList = this.optionService.getOptions();

        List<OptionResponse> response = optionList.stream().map(
                this.optionMapper::toOptionResponse
        ).toList();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OptionResponse> getOption(@PathVariable Long id) {
        Option option = this.optionService.getOption(id);
        OptionResponse response = this.optionMapper.toOptionResponse(option);
        return ResponseEntity.ok(response);
    }
}
