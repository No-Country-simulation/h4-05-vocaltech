package vocaltech.demo.persistence.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "`option`")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String value;

    @OneToMany(mappedBy = "option", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference // 👈 Indica el "lado padre" de la relación
    private Set<Template> templates;

}
