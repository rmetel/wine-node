FROM node:21-alpine3.17

WORKDIR /var/www

COPY . ./

EXPOSE 3001

ENTRYPOINT ["npm", "start"]

# terminal
# docker build -t metzner-backend -f docker/metzner-backend.dockerfile .
# docker run --name metzner-backend -dp 3001:3001 metzner-backend

# docker hub
# docker build -t ddrram/metzner-backend:1.0.0 -f docker/metzner-backend.dockerfile .
# docker push ddrram/metzner-backend:1.0.0
# docker run --name metzner-backend -dp 3001:3001 ddrram/metzner-backend:1.0.0
