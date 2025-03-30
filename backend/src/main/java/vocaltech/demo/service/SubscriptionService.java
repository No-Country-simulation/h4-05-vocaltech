package vocaltech.demo.service;

import vocaltech.demo.persistence.entity.Subscription;

import java.util.List;

public interface SubscriptionService {

    Subscription save(Subscription subscription);

    List<Subscription> listAllSubscriptions();
}
