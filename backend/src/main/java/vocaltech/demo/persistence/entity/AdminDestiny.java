package vocaltech.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "admin_destiny")
public class AdminDestiny {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "form_id", nullable = false)
    private Form form;

    @Column(name = "role_id", nullable = false)
    private Long roleId;
}
