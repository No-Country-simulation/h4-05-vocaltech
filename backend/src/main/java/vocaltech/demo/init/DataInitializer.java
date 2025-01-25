package vocaltech.demo.init;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import vocaltech.demo.common.enums.RoleEnum;
import vocaltech.demo.persistence.entity.*;
import vocaltech.demo.persistence.repository.*;
import vocaltech.demo.security.repository.UserRepository;

import java.util.Set;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ProfileRepository profileRepository;
    private final OptionRepository optionRepository;
    private final ServiceRepository serviceRepository;
    private final PasswordEncoder passwordEncoder;
    private final FormRepository formRepository;

    @Value("${admin1.name}")
    private String admin1Name;

    @Value("${admin1.email}")
    private String admin1Email;

    @Value("${admin1.password}")
    private String admin1Password;

    @Value("${admin2.name}")
    private String admin2Name;

    @Value("${admin2.email}")
    private String admin2Email;

    @Value("${admin2.password}")
    private String admin2Password;

    @Override
    public void run(String... args) throws Exception {

        if (this.roleRepository.count() == 0) {
            Role role1 = Role.builder()
                    .value(RoleEnum.ROLE_ADMIN_NO_COUNTRY)
                    .build();
            Role role2 = Role.builder()
                    .value(RoleEnum.ROLE_ADMIN_VOSYTUVOZ)
                    .build();
            this.roleRepository.save(role1);
            this.roleRepository.save(role2);
            User admin1 = User.builder()
                    .email(admin1Email)
                    .fullname(admin1Name)
                    .password(this.passwordEncoder.encode(admin1Password))
                    .roles(Set.of(role1))
                    .build();
            User admin2 = User.builder()
                    .email(admin2Email)
                    .fullname(admin2Name)
                    .password(this.passwordEncoder.encode(admin2Password))
                    .roles(Set.of(role2))
                    .build();
            this.userRepository.save(admin1);
            this.userRepository.save(admin2);
            Profile profile1 = Profile.builder()
                    .value("Emprendedor")
                    .build();
            Profile profile2 = Profile.builder()
                    .value("Empresa")
                    .build();
            profile1 = this.profileRepository.save(profile1);
            profile2 = this.profileRepository.save(profile2);
            Option option1 = Option.builder().value("Levantamiento de capital").build();
            Option option2 = Option.builder().value("Pitch a inversores").build();
            Option option3 = Option.builder().value("Comunicación efectiva para ventas").build();
            Option option4 = Option.builder().value("Construcción de MVP").build();
            Option option5 = Option.builder().value("Comunicación y liderazgo").build();
            Option option6 = Option.builder().value("Cultura empresarial").build();
            Option option7 = Option.builder().value("Reskilling - Upskilling").build();
            Option option8 = Option.builder().value("Evidencia de comportamiento").build();
            Option option9 = Option.builder().value("Contratación de nuevo talento").build();
            option1 = this.optionRepository.save(option1);
            option2 = this.optionRepository.save(option2);
            option3 = this.optionRepository.save(option3);
            option4 = this.optionRepository.save(option4);
            option5 = this.optionRepository.save(option5);
            option6 = this.optionRepository.save(option6);
            option7 = this.optionRepository.save(option7);
            option8 = this.optionRepository.save(option8);
            option9 = this.optionRepository.save(option9);
            Service service1 = Service.builder().value("Coaching de comunicación y liderazgo").build();
            Service service2 = Service.builder().value("Desarrollo de MVPs de alta fidelidad en 5 semanas").build();
            Service service3 = Service.builder().value("Workshops y coaching de comunicación y liderazgo").build();
            Service service4 = Service.builder().value("Busqueda y selección de talento").build();
            Service service5 = Service.builder().value("Ambos servicios").build();
            service1 = this.serviceRepository.save(service1);
            service2 = this.serviceRepository.save(service2);
            service3 = this.serviceRepository.save(service3);
            service4 = this.serviceRepository.save(service4);
            service5 = this.serviceRepository.save(service5);

            Form form1 = Form.builder()
                    .name("Emprendedor - Coaching de Comunicación y Liderazgo")
                    .profile(profile1)
                    .service(service1)
                    .checkList(Set.of(option1,option2,option3))
                    .build();
            Form form2 = Form.builder()
                    .name("Emprendedor - Desarrollo de MVPs de alta fidelidad en 5 semanas")
                    .profile(profile1)
                    .service(service2)
                    .checkList(Set.of(option4))
                    .build();
            Form form3 = Form.builder()
                    .name("Emprendedor - Ambos Servicios")
                    .profile(profile1)
                    .service(service5)
                    .checkList(Set.of(option1,option2,option3,option4))
                    .build();
            Form form4 = Form.builder()
                    .name("Empresa - Workshops y coaching de comunicación y liderazgo")
                    .profile(profile2)
                    .service(service3)
                    .checkList(Set.of(option5,option6,option7,option8))
                    .build();
            Form form5 = Form.builder()
                    .name("Empresa - Busqueda y selección de talento")
                    .profile(profile2)
                    .service(service4)
                    .checkList(Set.of(option9))
                    .build();
            Form form6 = Form.builder()
                    .name("Empresa - Ambos Servicios")
                    .profile(profile2)
                    .service(service5)
                    .checkList(Set.of(option5,option6,option7,option8,option9))
                    .build();
            this.formRepository.save(form1);
            this.formRepository.save(form2);
            this.formRepository.save(form3);
            this.formRepository.save(form4);
            this.formRepository.save(form5);
            this.formRepository.save(form6);

            logger.info("Initial data inserted.");
        } else {
            logger.info("Initial data already exists.");
        }
    }
}
