
# Base image
FROM node:18

# Add Maintainer info
LABEL maintainer="Luis F. Miranda"
# Create app directory

RUN mkdir /front
WORKDIR /front

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build

# Start the server using the production build
CMD [ "npm", "run","start" ]
