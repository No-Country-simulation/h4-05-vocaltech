package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.EntrepreneurInputs;

public interface EntrepreneurInputsRepository extends JpaRepository<EntrepreneurInputs, Long> {
}
