package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vocaltech.demo.controller.data.response.QuestionResponse;
import vocaltech.demo.mapper.QuestionMapper;
import vocaltech.demo.persistence.entity.Question;
import vocaltech.demo.service.implementation.QuestionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionServiceImpl questionService;
    private final QuestionMapper questionMapper;

    @GetMapping
    public ResponseEntity<List<QuestionResponse>> getQuestions() {
        List<Question> questionList = this.questionService.getQuestions();
        List<QuestionResponse> response = questionList.stream().map(this.questionMapper::toQuestionResponse).toList();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponse> getQuestion(@PathVariable Long id) {
        Question question = this.questionService.getQuestionById(id);
        QuestionResponse response = this.questionMapper.toQuestionResponse(question);
        return ResponseEntity.ok(response);
    }
}
