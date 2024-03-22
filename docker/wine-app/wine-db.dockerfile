FROM mysql:8.0.30

ENV MYSQL_ROOT_PASSWORD=wine-db
ENV MYSQL_DATABASE=wine-db

VOLUME [ "C:/Users/ddr_r/databases/wine-db:/var/lib/mysql:rw" ]

# Expose the MySQL port
EXPOSE 3306

# terminal
# docker build -t wine-db -f docker/wine-db.dockerfile .
# docker run --name wine-db -dp 3306:3306 -v "C:/Users/ddr_r/databases/wine-db:/var/lib/mysql:rw" wine-db