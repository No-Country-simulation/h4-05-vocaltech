package vocaltech.demo.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;


@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "`lead`")
public class Lead {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullname;

    private String socialMedia;

    private String creationDate;

    @ManyToOne(optional = false)
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @ManyToMany
    @JoinTable(
            name = "answers",
            joinColumns = @JoinColumn(name = "lead_id"),
            inverseJoinColumns = @JoinColumn(name = "option_id")
    )
    private Set<Option> answers;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "voice_recording_id", referencedColumnName = "id")
    private VoiceRecording voiceRecording;

    private Long profileInputsId;

}
