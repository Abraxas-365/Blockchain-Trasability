FROM node




ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz


RUN mkdir /super-bouncer
WORKDIR /super-bouncer
COPY package.json .
RUN npm install\
    && npm install typescript -g

COPY . .

RUN tsc

CMD dockerize -wait tcp://rabbitmq:15672 -timeout 60m node ./dist/app.js
