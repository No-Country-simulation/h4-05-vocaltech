package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.exception.ProfileNotFoundException;
import vocaltech.demo.persistence.entity.Profile;
import vocaltech.demo.persistence.repository.ProfileRepository;
import vocaltech.demo.service.ProfileService;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;

    @Override
    public Profile getProfile(Long id) {
        return this.profileRepository.findById(id)
                .orElseThrow(ProfileNotFoundException::new);
    }
}
