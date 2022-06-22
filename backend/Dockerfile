FROM --platform=linux/amd64 maven:3.8.5-openjdk-17 as build
# set working directory
WORKDIR /opt/demo
# copy just pom.xml
COPY pom.xml .
# copy your other files
COPY ./src ./src
# compile the source code and package it in a jar file
RUN mvn clean install -Dmaven.test.skip=true

FROM --platform=linux/amd64 openjdk:17-alpine
# set deployment directory
WORKDIR /home/root/app
# copy over the built artifact from the maven image
COPY --from=build /opt/demo/target/demo-0.0.1-SNAPSHOT.jar /home/root/app
ENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar"]