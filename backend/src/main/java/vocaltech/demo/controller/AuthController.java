package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vocaltech.demo.controller.data.request.LoginRequest;
import vocaltech.demo.controller.data.response.LoginResponse;
import vocaltech.demo.persistence.entity.Appointment;
import vocaltech.demo.persistence.entity.Lead;
import vocaltech.demo.service.AppointmentService;
import vocaltech.demo.service.implementation.AuthServiceImpl;
import vocaltech.demo.service.implementation.LeadServiceImpl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;
    private final LeadServiceImpl leadService;

    private final AppointmentService appointmentService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {

        LoginResponse response = this.authService.login(request);
        List<Lead> leadList = this.leadService.getLeads();
        List<Appointment> appointmentList = this.appointmentService.getAllAppointments();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        response.setMetrics(LoginResponse.Metrics.builder()
                .leads(leadList.size())
                .pendingAppointments(/*appointmentList.stream().filter(
                        appointment ->
                                appointment.getStatus().equalsIgnoreCase("PENDING")
                ).toList().size()*/
                appointmentList.size())
                .lastAppointments(appointmentList.size())
                .sentPlans(0)
                .build());
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }


}
