package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.response.QuestionResponse;
import vocaltech.demo.persistence.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    QuestionResponse toQuestionResponse(Question question);
}
