package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.persistence.entity.Subscription;
import vocaltech.demo.persistence.repository.SubscriptionRepository;
import vocaltech.demo.service.SubscriptionService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriptionServiceImpl implements SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    @Override
    public Subscription save(Subscription subscription) {
        return this.subscriptionRepository.save(subscription);
    }

    @Override
    public List<Subscription> listAllSubscriptions() {
        return this.subscriptionRepository.findAll();
    }
}
