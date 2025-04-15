package vocaltech.demo.service;

import vocaltech.demo.controller.data.request.LoginRequest;
import vocaltech.demo.controller.data.response.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);
}
