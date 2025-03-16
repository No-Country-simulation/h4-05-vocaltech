package vocaltech.demo.exception;

public class ProfileNotFoundException extends NotFoundException {
    private static final String DEFAULT_MESSAGE = "Profile does not exist";

    public ProfileNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public ProfileNotFoundException(String message) {
        super(message);
    }
}
