package vocaltech.demo.exception;

public class UserNotFoundException extends NotFoundException{

    private static final String DEFAULT_MESSAGE = "User does not exist";

    public UserNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}
