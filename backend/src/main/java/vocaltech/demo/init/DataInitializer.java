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
    private final QuestionRepository questionRepository;
    private final PasswordEncoder passwordEncoder;

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

            role1 = this.roleRepository.save(role1);
            role2 = this.roleRepository.save(role2);

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
                    .value("Ejecutivo de Empresa")
                    .build();

            profile1 = this.profileRepository.save(profile1);
            profile2 = this.profileRepository.save(profile2);

            Service service1 = Service.builder().value("Etapa Actual").build();
            Service service2 = Service.builder().value("Comunicacion y Pitch").build();
            Service service3 = Service.builder().value("Producto y Crecimiento").build();
            Service service4 = Service.builder().value("Talento y Equipo").build();
            Service service5 = Service.builder().value("Comunicacion y Liderazgo").build();
            Service service6 = Service.builder().value("Gestion y Desarrollo de Talento").build();

            service1 = this.serviceRepository.save(service1);
            service2 = this.serviceRepository.save(service2);
            service3 = this.serviceRepository.save(service3);
            service4 = this.serviceRepository.save(service4);
            service5 = this.serviceRepository.save(service5);
            service6 = this.serviceRepository.save(service6);

            // Creando preguntas para el servicio "Etapa Actual"
            Question question1 = Question.builder().value("¿Donde se encuentra tu proyecto?").service(service1).build();

            // Creando preguntas para el servicio "Comunicacion y Pitch"
            Question question2 = Question.builder().value("¿Crees que las personas te entienden cuando te comunicas?").service(service2).build();
            Question question3 = Question.builder().value("¿Tienes un pitch efectivo que genere interes en segundos?").service(service2).build();
            Question question4 = Question.builder().value("¿Tu voz transmite seguridad y capta la atencion del publico?").service(service2).build();

            // Creando preguntas para el servicio "Producto y Crecimiento"
            Question question5 = Question.builder().value("¿Cual es tu situacion con el desarrollo del producto o MVP?").service(service3).build();

            // Creando preguntas para el servicio "Talento y Equipo"
            Question question6 = Question.builder().value("¿Buscas talento estrategico para crecer?").service(service4).build();
            Question question7 = Question.builder().value("¿Cual es el mayor desafio de tu equipo?").service(service4).build();

            // Creando preguntas para el servicio "Comunicacion y Liderazgo"
            Question question8 = Question.builder().value("¿Como describirias tu capacidad para influir y liderar a tu equipo?").service(service5).build();
            Question question9 = Question.builder().value("¿Tu voz transmite autoridad y seguridad al hablar?").service(service5).build();
            Question question10 = Question.builder().value("¿Que tan comodo/a te sientes en conversaciones dificiles (negociaciones, feedback, gestion de conflictos)?").service(service5).build();
            Question question11 = Question.builder().value("¿Te resulta facil captar la atencion y el interes de tu equipo o clientes en reuniones o presentaciones?").service(service5).build();

            // Creando preguntas para el servicio "Gestion y Desarrollo de Talento"
            Question question12 = Question.builder().value("¿Tienes dificultades en la contratacion o retencion de talento clave?").service(service6).build();
            Question question13 = Question.builder().value("¿Que te gustaria mejorar en tu equipo?").service(service6).build();

            question1 = this.questionRepository.save(question1);
            question2 = this.questionRepository.save(question2);
            question3 = this.questionRepository.save(question3);
            question4 = this.questionRepository.save(question4);
            question5 = this.questionRepository.save(question5);
            question6 = this.questionRepository.save(question6);
            question7 = this.questionRepository.save(question7);
            question8 = this.questionRepository.save(question8);
            question9 = this.questionRepository.save(question9);
            question10 = this.questionRepository.save(question10);
            question11 = this.questionRepository.save(question11);
            question12 = this.questionRepository.save(question12);
            question13 = this.questionRepository.save(question13);

            // Creando opciones para la pregunta ¿Donde se encuentra tu proyecto?
            Option option1 = Option.builder().value("Idea inicial").question(question1).build();
            Option option2 = Option.builder().value("Validando mercado").question(question1).build();
            Option option3 = Option.builder().value("Generando ingresos").question(question1).build();
            Option option4 = Option.builder().value("Buscando escalar").question(question1).build();

            // Creando opciones para la pregunta ¿Crees que las personas te entienden cuando te comunicas?
            Option option5 = Option.builder().value("Si").question(question2).build();
            Option option6 = Option.builder().value("Puede mejorar").question(question2).build();
            Option option7 = Option.builder().value("Necesito ayuda").question(question2).build();

            // Creando opciones para la pregunta ¿Tienes un pitch efectivo que genere interes en segundos?
            Option option8 = Option.builder().value("Si, funciona y da resultados").question(question3).build();
            Option option9 = Option.builder().value("Si, pero podria ser mas impactante").question(question3).build();
            Option option10 = Option.builder().value("No, y lo necesito para atraer inversores y clientes").question(question3).build();

            // Creando opciones para la pregunta ¿Tu voz transmite seguridad y capta la atencion del publico?
            Option option11 = Option.builder().value("Si, mi voz refuerza mi mensaje").question(question4).build();
            Option option12 = Option.builder().value("A veces siento que no impacta lo suficiente").question(question4).build();
            Option option13 = Option.builder().value("No, y creo que afecta mi comunicacion").question(question4).build();

            // Creando opciones para la pregunta ¿Cual es tu situacion con el desarrollo del producto o MVP?
            Option option14 = Option.builder().value("Aun no lo hemos desarrollado").question(question5).build();
            Option option15 = Option.builder().value("Estamos trabajando en un prototipo").question(question5).build();
            Option option16 = Option.builder().value("Tenemos un MVP en fase de validacion").question(question5).build();
            Option option17 = Option.builder().value("Ya tenemos un producto funcional y queremos mejorarlo").question(question5).build();

            // Creando opciones para la pregunta ¿Buscas talento estrategico para crecer?
            Option option18 = Option.builder().value("Si, pero necesitamos mejorar el proceso de seleccion").question(question6).build();
            Option option19 = Option.builder().value("Si, pero aun no tenemos un plan claro").question(question6).build();
            Option option20 = Option.builder().value("No en este momento").question(question6).build();

            // Creando opciones para la pregunta ¿Cual es el mayor desafio de tu equipo?
            Option option21 = Option.builder().value("Reclutamiento").question(question7).build();
            Option option22 = Option.builder().value("Onboarding").question(question7).build();
            Option option23 = Option.builder().value("Contratacion").question(question7).build();
            Option option24 = Option.builder().value("Retencion y rotacion").question(question7).build();

            // Creando opciones para la pregunta ¿Como describirias tu capacidad para influir y liderar a tu equipo?
            Option option25 = Option.builder().value("Consigo que me escuchen y actuen con claridad").question(question8).build();
            Option option26 = Option.builder().value("A veces siento que mi mensaje no genera el impacto esperado").question(question8).build();
            Option option27 = Option.builder().value("Me cuesta que las personas sigan mis ideas").question(question8).build();

            // Creando opciones para la pregunta ¿Tu voz transmite autoridad y seguridad al hablar?
            Option option28 = Option.builder().value("Si, me siento seguro/a al expresarme").question(question9).build();
            Option option29 = Option.builder().value("A veces dudo si mi voz refuerza mi liderazgo").question(question9).build();
            Option option30 = Option.builder().value("No, siento que mi voz no ayuda a mi comunicacion").question(question9).build();

            // Creando opciones para la pregunta ¿Que tan comodo/a te sientes en conversaciones dificiles (negociaciones, feedback, gestion de conflictos)?
            Option option31 = Option.builder().value("Manejo bien estas situaciones").question(question10).build();
            Option option32 = Option.builder().value("A veces me cuesta encontrar las palabras adecuadas").question(question10).build();
            Option option33 = Option.builder().value("Evito este tipo de conversaciones").question(question10).build();

            // Creando opciones para la pregunta ¿Te resulta facil captar la atencion y el interes de tu equipo o clientes en reuniones o presentaciones?
            Option option34 = Option.builder().value("Si, logro conectar y transmitir mi mensaje").question(question11).build();
            Option option35 = Option.builder().value("A veces siento que no logro impactar lo suficiente").question(question11).build();
            Option option36 = Option.builder().value("Me cuesta estructurar y comunicar mis ideas con claridad").question(question11).build();

            // Creando opciones para la pregunta ¿Tienes dificultades en la contratacion o retencion de talento clave?
            Option option37 = Option.builder().value("Si, encontrar y retener talento es un desafio").question(question12).build();
            Option option38 = Option.builder().value("Si, pero mas en terminos de integracion y cultura").question(question12).build();
            Option option39 = Option.builder().value("No, nuestro equipo esta consolidado").question(question12).build();

            // Creando opciones para la pregunta ¿Que te gustaria mejorar en tu equipo?
            Option option40 = Option.builder().value("Mayor compromiso y alineacion con la vision").question(question13).build();
            Option option41 = Option.builder().value("Mejor comunicacion interna y fluidez en la toma de decisiones").question(question13).build();
            Option option42 = Option.builder().value("Mas autonomia y liderazgo en los colaboradores").question(question13).build();
            Option option43 = Option.builder().value("Otro: Especificar").question(question13).build();

            this.optionRepository.save(option1);
            this.optionRepository.save(option2);
            this.optionRepository.save(option3);
            this.optionRepository.save(option4);
            this.optionRepository.save(option5);
            this.optionRepository.save(option6);
            this.optionRepository.save(option7);
            this.optionRepository.save(option8);
            this.optionRepository.save(option9);
            this.optionRepository.save(option10);
            this.optionRepository.save(option11);
            this.optionRepository.save(option12);
            this.optionRepository.save(option13);
            this.optionRepository.save(option14);
            this.optionRepository.save(option15);
            this.optionRepository.save(option16);
            this.optionRepository.save(option17);
            this.optionRepository.save(option18);
            this.optionRepository.save(option19);
            this.optionRepository.save(option20);
            this.optionRepository.save(option21);
            this.optionRepository.save(option22);
            this.optionRepository.save(option23);
            this.optionRepository.save(option24);
            this.optionRepository.save(option25);
            this.optionRepository.save(option26);
            this.optionRepository.save(option27);
            this.optionRepository.save(option28);
            this.optionRepository.save(option29);
            this.optionRepository.save(option30);
            this.optionRepository.save(option31);
            this.optionRepository.save(option32);
            this.optionRepository.save(option33);
            this.optionRepository.save(option34);
            this.optionRepository.save(option35);
            this.optionRepository.save(option36);
            this.optionRepository.save(option37);
            this.optionRepository.save(option38);
            this.optionRepository.save(option39);
            this.optionRepository.save(option40);
            this.optionRepository.save(option41);
            this.optionRepository.save(option42);
            this.optionRepository.save(option43);

            logger.info("Initial data inserted.");

        } else {
            logger.info("Initial data already exists.");
        }
    }

        /*if (this.roleRepository.count() == 0) {

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
                    .checkList(Set.of(option1, option2, option3))
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
                    .checkList(Set.of(option1, option2, option3, option4))
                    .build();
            Form form4 = Form.builder()
                    .name("Empresa - Workshops y coaching de comunicación y liderazgo")
                    .profile(profile2)
                    .service(service3)
                    .checkList(Set.of(option5, option6, option7, option8))
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
                    .checkList(Set.of(option5, option6, option7, option8, option9))
                    .build();

            this.formRepository.save(form1);
            this.formRepository.save(form2);
            this.formRepository.save(form3);
            this.formRepository.save(form4);
            this.formRepository.save(form5);
            this.formRepository.save(form6);

            AdminDestiny adminDestiny1 = AdminDestiny.builder()
                    .form(form1)
                    .roleId(role2.getId())
                    .build();
            AdminDestiny adminDestiny2 = AdminDestiny.builder()
                    .form(form2)
                    .roleId(role1.getId())
                    .build();
            AdminDestiny adminDestiny3 = AdminDestiny.builder()
                    .form(form3)
                    .roleId(role1.getId())
                    .build();
            AdminDestiny adminDestiny4 = AdminDestiny.builder()
                    .form(form3)
                    .roleId(role2.getId())
                    .build();
            AdminDestiny adminDestiny5 = AdminDestiny.builder()
                    .form(form4)
                    .roleId(role2.getId())
                    .build();
            AdminDestiny adminDestiny6 = AdminDestiny.builder()
                    .form(form5)
                    .roleId(role1.getId())
                    .build();
            AdminDestiny adminDestiny7 = AdminDestiny.builder()
                    .form(form6)
                    .roleId(role1.getId())
                    .build();
            AdminDestiny adminDestiny8 = AdminDestiny.builder()
                    .form(form6)
                    .roleId(role2.getId())
                    .build();

            this.adminDestinyRepository.save(adminDestiny1);
            this.adminDestinyRepository.save(adminDestiny2);
            this.adminDestinyRepository.save(adminDestiny3);
            this.adminDestinyRepository.save(adminDestiny4);
            this.adminDestinyRepository.save(adminDestiny5);
            this.adminDestinyRepository.save(adminDestiny6);
            this.adminDestinyRepository.save(adminDestiny7);
            this.adminDestinyRepository.save(adminDestiny8);
            logger.info("Initial data inserted.");
        } else {
            logger.info("Initial data already exists.");
        }*/

}
