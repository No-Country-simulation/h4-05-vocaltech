package vocaltech.demo.controller.data.request;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionRequest {
    private String email;
}
