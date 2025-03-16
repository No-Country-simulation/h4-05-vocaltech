package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.QuestionNotFoundException;
import vocaltech.demo.persistence.entity.Question;
import vocaltech.demo.persistence.repository.QuestionRepository;
import vocaltech.demo.service.QuestionService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    @Override
    public List<Question> getQuestions() {
        return this.questionRepository.findAll();
    }

    @Override
    public Question getQuestionById(Long id) {
        return this.questionRepository.findById(id)
                .orElseThrow(QuestionNotFoundException::new);
    }
}
