package vocaltech.demo.exception;

public class LeadNotFoundException extends NotFoundException {

    private static final String DEFAULT_MESSAGE = "Lead does not exist";

    public LeadNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public LeadNotFoundException(String message) {
        super(message);
    }
}
