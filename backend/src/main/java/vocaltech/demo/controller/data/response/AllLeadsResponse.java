package vocaltech.demo.controller.data.response;

import lombok.*;

import java.util.List;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AllLeadsResponse {
    private List<EntrepreneurLeadResponse> entrepreneurLeads;
    private List<ExecutiveLeadResponse> executiveLeads;
}
