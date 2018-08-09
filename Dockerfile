FROM node:10.8.0-alpine

COPY . .

RUN ["npm","install"]

CMD ["npm","start"]
