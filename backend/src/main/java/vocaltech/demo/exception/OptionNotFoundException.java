package vocaltech.demo.exception;

public class OptionNotFoundException extends NotFoundException{
    private static final String DEFAULT_MESSAGE = "Option does not exist";

    public OptionNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public OptionNotFoundException(String message) {
        super(message);
    }
}
