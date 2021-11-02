FROM node:10

# App directory on Docker server
WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
