package vocaltech.demo.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vocaltech.demo.controller.data.request.LoginRequest;
import vocaltech.demo.controller.data.response.LoginResponse;
import vocaltech.demo.persistence.entity.User;
import vocaltech.demo.security.repository.UserRepository;
import vocaltech.demo.security.utils.JwtUtils;
import vocaltech.demo.service.AuthService;

import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public LoginResponse login(LoginRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                email,
                                password
                        )

                );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User) authentication.getPrincipal();

        String token = jwtUtils.createToken(authentication);

        return LoginResponse.builder()
                .token(token)
                .userInfo(LoginResponse.UserInfo
                        .builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .roles(
                                user.getRoles()
                                        .stream().map(role -> role.getValue().name())
                                        .collect(Collectors.toSet())
                        )
                        .build())
                .build();
    }
}
