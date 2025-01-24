package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vocaltech.demo.persistence.entity.Form;

import java.util.Optional;

@Repository
public interface FormRepository extends JpaRepository<Form, Long> {

    Optional<Form> findByProfileIdAndServiceId(Long profileId, Long serviceId);

}
