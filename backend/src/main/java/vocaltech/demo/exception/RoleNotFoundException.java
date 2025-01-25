package vocaltech.demo.exception;

public class RoleNotFoundException extends NotFoundException{
    private static final String DEFAULT_MESSAGE = "Role does not exist";

    public RoleNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public RoleNotFoundException(String message) {
        super(message);
    }
}
