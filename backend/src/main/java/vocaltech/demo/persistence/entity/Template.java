import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "template")

public class Template {

    @Id
    @GenerateValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "role_id", nullbase = false)
    private long role_id;

    @Column(name = "tittle", nullbase = false)
    private string tittle;

    @Column(name = "subject", nullbase = false)
    private string subject;

    @Column(name = "body", nullbase = false)
    private string body;

    @Column(name = "service_id" nullbase = false)
    private long service_id;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public long getRole_id() { return role_id; }

    public void setRole_id(long role_id) { this.role_id = role_id; }

    public string getTittle() { return message; }

    public void setTittle() {this.message = message; }

    public void getSubject() {this.subject = subject; }

    public void setSubject() {this.subject = subject; }

    public void getBody() {this.body = body; }

    public void setBody() {this.body = body; }

    public void getService_id() {service_id = service_id; }

    public void setService_id() {service_id = service_id; }
}