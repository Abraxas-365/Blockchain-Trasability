FROM node





RUN mkdir /swagger
WORKDIR /swagger
COPY package.json .
RUN npm install

COPY . .


CMD ["node","src/app.js"]
