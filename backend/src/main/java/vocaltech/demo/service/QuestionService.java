package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getQuestions();

    Question getQuestionById(Long id);
}
