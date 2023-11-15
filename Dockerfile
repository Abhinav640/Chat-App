FROM node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

#RUN npm run dev

EXPOSE 3000

CMD ["npm", "start"]
