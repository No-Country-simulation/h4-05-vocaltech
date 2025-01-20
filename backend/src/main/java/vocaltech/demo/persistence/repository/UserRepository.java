package vocaltech.demo.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import vocaltech.demo.persistence.entity.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findUserByEmail(String email);
}
