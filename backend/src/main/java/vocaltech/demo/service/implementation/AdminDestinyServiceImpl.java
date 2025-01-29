package vocaltech.demo.service.implementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vocaltech.demo.persistence.entity.AdminDestiny;
import vocaltech.demo.persistence.repository.AdminDestinyRepository;
import vocaltech.demo.service.AdminDestinyService;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminDestinyServiceImpl implements AdminDestinyService {

    private final AdminDestinyRepository adminDestinyRepository;


    @Override
    public Set<Long> getRoleIdsByFormId(Long formId) {
        List<AdminDestiny> adminDestinyList = this.adminDestinyRepository.findByFormId(formId);
        return adminDestinyList.stream().map(
                AdminDestiny::getRoleId
        ).collect(Collectors.toSet());
    }
}
