FROM node:21-alpine3.17

WORKDIR /var/www

COPY . ./

EXPOSE 3001

RUN apk update && apk upgrade

RUN apk add nano

ENTRYPOINT ["npm", "start"]

# terminal
# docker build -t wine-node -f docker/wine-app/wine-node.dockerfile .
# docker run --name wine-node -dp 3001:3001 wine-node

# docker hub
# docker build -t ddrram/wine-node:1.1.0 -f docker/wine-node.dockerfile .
# docker push ddrram/wine-node:1.1.0
# docker run --name wine-node -dp 3001:3001 ddrram/wine-node:1.1.0
