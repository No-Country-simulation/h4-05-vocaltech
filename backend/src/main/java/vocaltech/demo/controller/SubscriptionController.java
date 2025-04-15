package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.SubscriptionRequest;
import vocaltech.demo.mapper.SubscriptionMapper;
import vocaltech.demo.persistence.entity.Subscription;
import vocaltech.demo.service.implementation.SubscriptionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subscription")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionServiceImpl subscriptionService;
    private final SubscriptionMapper subscriptionMapper;

    @PostMapping
    public ResponseEntity<Subscription> sendSubscription(
            @RequestBody SubscriptionRequest request
    ) {
        Subscription subscription = this.subscriptionMapper.toSubscription(request);
        subscription = this.subscriptionService.save(subscription);

        return new ResponseEntity<>(subscription, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Subscription>> listAllSubscription() {
        List<Subscription> subscriptionList = this.subscriptionService.listAllSubscriptions();

        return new ResponseEntity<>(subscriptionList, HttpStatus.OK);
    }

}
