package vocaltech.demo.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "template")
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "role_id", nullable = false)
    private Long role_id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "subject", nullable = false)
    private String subject;

    @Column(name = "body", nullable = false)
    private String body;

    @ManyToOne
    @JoinColumn(name = "option_id", nullable = false)
    @JsonBackReference // 👈 Indica el "lado hijo" de la relación
    private Option option;
}