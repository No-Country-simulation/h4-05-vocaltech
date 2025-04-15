FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/vocaltechapp-0.0.1-exec.jar
COPY ${JAR_FILE} vocaltechapp.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "vocaltechapp.jar"]