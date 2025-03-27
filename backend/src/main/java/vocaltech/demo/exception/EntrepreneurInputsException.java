package vocaltech.demo.exception;

public class EntrepreneurInputsException extends NotFoundException {

    private static final String DEFAULT_MESSAGE = "EntrepreneurInputs does not exist";

    public EntrepreneurInputsException() {
        super(DEFAULT_MESSAGE);
    }

    public EntrepreneurInputsException(String message) {
        super(message);
    }
}
