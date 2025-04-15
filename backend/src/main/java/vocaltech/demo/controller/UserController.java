package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.RegisterUserRequest;
import vocaltech.demo.controller.data.response.RegisterUserResponse;
import vocaltech.demo.email.EmailTemplates;
import vocaltech.demo.mapper.UserMapper;
import vocaltech.demo.persistence.entity.Role;
import vocaltech.demo.persistence.entity.User;
import vocaltech.demo.service.EmailService;
import vocaltech.demo.service.implementation.RoleServiceImpl;
import vocaltech.demo.service.implementation.UserDetailsServiceImpl;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserDetailsServiceImpl userDetailsService;
    private final RoleServiceImpl roleService;
    private final EmailService emailService;
    private final UserMapper userMapper;

    @PostMapping
    public ResponseEntity<RegisterUserResponse> register(
            @RequestBody RegisterUserRequest request
    ) {
        User user = this.userMapper.toUser(request);
        Role role = this.roleService.getRole(request.getRoleId());
        user.setRoles(Set.of(role));
        user = this.userDetailsService.registerUser(user);
        RegisterUserResponse response = this.userMapper.toRegisterUserResponse(user);
        String emailTemplate = EmailTemplates.getRegistrationSuccessEmailTemplate(user.getFullname());
        this.emailService.sendEmail(
                user.getEmail(),
                "Registro exitoso a la plataforma de Vocaltech",
                emailTemplate);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<RegisterUserResponse>> getUsers() {
        List<User> users = this.userDetailsService.getUsers();
        List<RegisterUserResponse> response = users.stream()
                .map(this.userMapper::toRegisterUserResponse).toList();
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegisterUserResponse> updateUser(
            @RequestBody RegisterUserRequest request,
            @PathVariable Long id
    ) {
        User user = this.userMapper.toUser(request);
        Role role = this.roleService.getRole(request.getRoleId());
        user.setRoles(Set.of(role));
        user = this.userDetailsService.updateUser(user, id);
        RegisterUserResponse response = this.userMapper.toRegisterUserResponse(user);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(
            @PathVariable Long id
    ) {
        this.userDetailsService.deleteUser(id);
        return ResponseEntity.ok(String.format("User with ID %s was deleted.", id));
    }
}
