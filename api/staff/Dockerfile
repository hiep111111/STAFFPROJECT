FROM node:alpine

WORKDIR /purchase

COPY . .
COPY ./../Core ./../Core

RUN npm install

EXPOSE 1000

CMD ["node", "index.js"]
