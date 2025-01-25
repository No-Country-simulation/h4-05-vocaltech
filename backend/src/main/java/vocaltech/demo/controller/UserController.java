package vocaltech.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import vocaltech.demo.controller.data.request.RegisterUserRequest;
import vocaltech.demo.controller.data.response.RegisterUserResponse;
import vocaltech.demo.mapper.UserMapper;
import vocaltech.demo.persistence.entity.Role;
import vocaltech.demo.persistence.entity.User;
import vocaltech.demo.service.implementation.RoleServiceImpl;
import vocaltech.demo.service.implementation.UserDetailsServiceImpl;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserDetailsServiceImpl userDetailsService;
    private final RoleServiceImpl roleService;
    private final UserMapper userMapper;

    @PostMapping
    public ResponseEntity<RegisterUserResponse> register(
            @RequestBody RegisterUserRequest request,
            Authentication authentication
    ) {
        User user = this.userMapper.toUser(request);
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Set<Role> userRoles = authorities.stream().map(authority -> this.roleService.getRole(authority.getAuthority())
        ).collect(Collectors.toSet());
        user.setRoles(userRoles);
        user = this.userDetailsService.registerUser(user);
        RegisterUserResponse response = this.userMapper.toRegisterUserResponse(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<RegisterUserResponse>> getUsers() {
        List<User> users = this.userDetailsService.getUsers();
        List<RegisterUserResponse> response = users.stream()
                .map(this.userMapper::toRegisterUserResponse).toList();
        return ResponseEntity.ok(response);
    }


}
