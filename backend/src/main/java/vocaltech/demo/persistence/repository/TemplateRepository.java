package vocaltech.demo.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import vocaltech.demo.persistence.entity.Template;

import java.util.Optional;

@Repository
public interface TemplateRepository extends CrudRepository<Template, Long>{
    Optional<Template> findByService(String service);
}
