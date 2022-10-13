FROM golang:alpine

# Add Maintainer info
LABEL maintainer="Luis F. Miranda"

# Install git.
# Git is required for fetching the dependencies.
RUN apk update && apk add --no-cache git && apk add --no-cach bash && apk add build-base

ENV DOCKERIZE_VERSION v0.6.1
RUN apk add --no-cache openssl \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz
# Setup folders
RUN mkdir /reporter
WORKDIR /reporter

# Copy the source from the current directory to the working Directory inside the container
COPY . .

# Install the package
RUN go mod tidy

# Build the Go app
RUN go build cmd/main.go

# Expose port 3000 to the outside world
EXPOSE 3002:3002

# Run the executable
CMD dockerize -wait tcp://rabbitmq:15672 -timeout 60m ./main
