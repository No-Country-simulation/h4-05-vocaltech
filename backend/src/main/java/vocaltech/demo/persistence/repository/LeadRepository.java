package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vocaltech.demo.persistence.entity.Lead;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {
}
