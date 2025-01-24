package vocaltech.demo.exception.data.response;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExceptionResponse {
    private int status;
    private Map<String, String> errors;
}
