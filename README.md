# node-nginx-docker
- docker network create pfa
- docker run -d --network=pfa --name=pfa-mysql -e MYSQL_ROOT_PASSWORD=root -v $(pwd)/dbdata:/var/lib/mysql -v $(pwd)/mysql:/docker-entrypoint-initdb.d felipecararosc/pfa-mysql
- docker run -d --network=pfa --name=nodecontainer -v $(pwd)/node:/usr/src/app felipecararosc/pfa-node node index.js
- docker run -d --network=pfa --name=pfa-nginx -p 8080:80 felipecararosc/pfa-nginx

# Visualizar a list
- http://localhost:8080/

