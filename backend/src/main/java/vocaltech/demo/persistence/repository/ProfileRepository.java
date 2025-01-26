package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
