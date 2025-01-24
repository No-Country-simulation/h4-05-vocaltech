package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vocaltech.demo.persistence.entity.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
}
