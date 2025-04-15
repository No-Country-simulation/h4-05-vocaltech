package vocaltech.demo.mapper;

import org.mapstruct.Mapper;
import vocaltech.demo.controller.data.request.SubscriptionRequest;
import vocaltech.demo.persistence.entity.Subscription;

@Mapper(componentModel = "spring")
public interface SubscriptionMapper {
    Subscription toSubscription(SubscriptionRequest request);
}
