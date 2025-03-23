package vocaltech.demo.controller.data.response;

import lombok.*;
import vocaltech.demo.persistence.entity.Option;
import vocaltech.demo.persistence.entity.Profile;

import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExecutiveLeadResponse {

    private Long id;
    private Profile profile;
    private String fullname;
    private String socialMedia;
    private String creationDate;
    private Set<Option> answers;
    private String voiceRecordingPath;

    private String occupation;
    private String enterpriseName;
    private String enterpriseEmail;
    private String enterpriseSector;
    private int teamQuantity;
    // este valor se llena cuando a la pregunta:  ¿Qué te gustaría mejorar en tu equipo? Selecciona Otro(Especificar)
    private String specifyOther;
}
