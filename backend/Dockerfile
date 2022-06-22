FROM --platform=linux/amd64 maven:3.8.5-openjdk-17 as build

WORKDIR /opt/demo

COPY pom.xml .

COPY ./src ./src

RUN mvn clean install -Dmaven.test.skip=true

FROM --platform=linux/amd64 openjdk:17-alpine

WORKDIR /home/root/app

COPY --from=build /opt/demo/target/demo-0.0.1-SNAPSHOT.jar /home/root/app

ENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar"]