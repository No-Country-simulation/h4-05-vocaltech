package vocaltech.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.persistence.entity.Appointment;
import vocaltech.demo.service.AppointmentService;
import vocaltech.demo.service.implementation.LeadServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private LeadServiceImpl leadService;

    @GetMapping
    public List<Appointment> getAllAppointments() {

        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        Optional<Appointment> appointment = appointmentService.getAppointmentById(id);
        return appointment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {

        appointment = this.appointmentService.saveAppointment(appointment);
        return new ResponseEntity<>(appointment, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails) {
        Optional<Appointment> appointmentOptional = appointmentService.getAppointmentById(id);

        if (appointmentOptional.isPresent()) {
            Appointment appointment = appointmentOptional.get();
            appointment.setStartDate(appointmentDetails.getStartDate());
            appointment.setStatus(appointmentDetails.getStatus());
            appointment.setLeadId(appointmentDetails.getLeadId());
            appointment.setMeetingLink(appointmentDetails.getMeetingLink()); // Actualizar enlace
            appointment.setEmail(appointmentDetails.getEmail()); // Actualizar correo
            return ResponseEntity.ok(appointmentService.saveAppointment(appointment));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        if (appointmentService.getAppointmentById(id).isPresent()) {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
