package vocaltech.demo.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExecutiveInputs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String occupation;
    private String enterpriseName;
    private String enterpriseEmail;
    private String enterpriseSector;
    private int teamQuantity;

    // este valor se llena cuando a la pregunta:  ¿Qué te gustaría mejorar en tu equipo? Selecciona Otro(Especificar)
    private String specifyOther;
}
