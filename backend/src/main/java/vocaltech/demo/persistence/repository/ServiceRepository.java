package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.Service;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
