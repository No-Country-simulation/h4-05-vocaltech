package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vocaltech.demo.persistence.entity.Template;

@Repository
public interface TemplateRepository extends JpaRepository<Template, Long> {
    //Optional<Template> findByService(String service);

}
