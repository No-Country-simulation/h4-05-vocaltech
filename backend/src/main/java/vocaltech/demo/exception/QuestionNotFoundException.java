package vocaltech.demo.exception;

public class QuestionNotFoundException extends NotFoundException {

    private static final String DEFAULT_MESSAGE = "Question does not exist";

    public QuestionNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public QuestionNotFoundException(String message) {
        super(message);
    }
}
