FROM node:12-alpine as base

WORKDIR /home/node
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]