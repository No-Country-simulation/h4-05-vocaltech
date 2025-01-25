package vocaltech.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import vocaltech.demo.exception.data.response.ExceptionResponse;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> handleValidationExceptions(
            MethodArgumentNotValidException ex
    ) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String errorMessage = error.getDefaultMessage();
            if (error instanceof FieldError) {
                String fieldName = ((FieldError) error).getField();
                errors.put(fieldName, errorMessage);
            } else {
                errors.put("error", errorMessage);
            }
        });
        return ResponseEntity.badRequest()
                .body(new ExceptionResponse(
                        HttpStatus.BAD_REQUEST.value(),
                        errors)
                );
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ExceptionResponse> throwNotFoundException(
            Exception ex
    ) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ExceptionResponse(
                        HttpStatus.NOT_FOUND.value(),
                        errorMap)
                );
    }


}
