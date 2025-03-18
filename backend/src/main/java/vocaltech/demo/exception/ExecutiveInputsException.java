package vocaltech.demo.exception;

public class ExecutiveInputsException extends NotFoundException {
    private static final String DEFAULT_MESSAGE = "ExecutiveInputs does not exist";

    public ExecutiveInputsException() {
        super(DEFAULT_MESSAGE);
    }

    public ExecutiveInputsException(String message) {
        super(message);
    }
}
