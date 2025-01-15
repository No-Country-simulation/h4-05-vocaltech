package vocaltech.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import vocaltech.demo.common.enums.RoleEnum;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(value = EnumType.STRING)
    private RoleEnum value;

}
