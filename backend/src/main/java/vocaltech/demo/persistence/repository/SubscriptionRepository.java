package vocaltech.demo.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vocaltech.demo.persistence.entity.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}
