package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.AdminDestiny;

import java.util.List;

public interface AdminDestinyRepository extends JpaRepository<AdminDestiny, Long> {
    List<AdminDestiny> findByFormId(Long formId);
}
