package vocaltech.demo.controller.data.response;

import lombok.*;
import org.springframework.data.geo.Metrics;

import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {

    private String token;
    private UserInfo userInfo;
    private Metrics metrics;

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class UserInfo {
        private Long id;
        private String fullname;
        private String email;
        private Set<String> roles;
    }

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Metrics {
        private int leads;
        private int pendingAppointments;
        private int lastAppointments;
        private int sentPlans;
    }
}
