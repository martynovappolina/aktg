FROM node:19.5.0-alpine
RUN mkdir -p /app
RUN mkdir -p /front_build
WORKDIR /app
COPY front/package.json /app/package.json
RUN npm install
COPY front /app
RUN npm run build
RUN cp -R /app/build/ /front_build/
