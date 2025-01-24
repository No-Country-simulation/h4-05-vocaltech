package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.common.enums.RoleEnum;
import vocaltech.demo.exception.RoleNotFoundException;
import vocaltech.demo.persistence.entity.Role;
import vocaltech.demo.persistence.repository.RoleRepository;
import vocaltech.demo.service.RoleService;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public Role getRole(String role) {
        RoleEnum roleEnum;
        try {
            roleEnum = RoleEnum.valueOf(role);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("The provided role is not valid: " + role);
        }
        return this.roleRepository.findByValue(roleEnum)
                .orElseThrow(RoleNotFoundException::new);
    }
}
