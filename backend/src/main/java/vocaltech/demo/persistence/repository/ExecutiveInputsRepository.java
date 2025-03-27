package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.ExecutiveInputs;

public interface ExecutiveInputsRepository extends JpaRepository<ExecutiveInputs, Long> {
}
