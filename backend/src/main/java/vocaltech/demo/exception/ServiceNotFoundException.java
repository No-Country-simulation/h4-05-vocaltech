package vocaltech.demo.exception;

public class ServiceNotFoundException extends NotFoundException{
    private static final String DEFAULT_MESSAGE = "Service does not exist";

    public ServiceNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public ServiceNotFoundException(String message) {
        super(message);
    }
}