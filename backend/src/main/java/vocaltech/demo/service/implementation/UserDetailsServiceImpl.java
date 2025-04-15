package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.UserNotFoundException;
import vocaltech.demo.persistence.entity.User;
import vocaltech.demo.security.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        Optional<User> user = this.userRepository.findUserByEmail(username);
        if (user.isEmpty())
            throw new UsernameNotFoundException("the user not exists");
        return user.get();
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }

    public List<User> getUsers(){
        return this.userRepository.findAll();
    }

    public User updateUser(User user, Long id) {

        User userToUpdate = this.userRepository.findById(id)
                .orElseThrow(UserNotFoundException::new);
        userToUpdate.setFullname(user.getFullname());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setRoles(new HashSet<>(user.getRoles()));
        return this.userRepository.save(userToUpdate);
    }

    public void deleteUser(Long id) {
        User userToDelete = this.userRepository.findById(id)
                .orElseThrow(UserNotFoundException::new);
        this.userRepository.delete(userToDelete);
    }
}

