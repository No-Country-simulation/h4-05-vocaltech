package vocaltech.demo.exception;

public class TemplateNotFoundException extends NotFoundException{

    private static final String DEFAULT_MESSAGE = "Template does not exist";

    public TemplateNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public TemplateNotFoundException(String message) {
        super(message);
    }
}
