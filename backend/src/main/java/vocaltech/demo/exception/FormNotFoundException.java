package vocaltech.demo.exception;

public class FormNotFoundException extends NotFoundException {

    private static final String DEFAULT_MESSAGE = "Form does not exist";

    public FormNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public FormNotFoundException(String message) {
        super(message);
    }
}
