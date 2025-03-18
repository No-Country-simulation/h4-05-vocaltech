package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
