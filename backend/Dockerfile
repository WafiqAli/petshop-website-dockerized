FROM node:latest

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY . .

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]