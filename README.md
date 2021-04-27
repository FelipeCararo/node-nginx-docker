# node-nginx-docker
- Iniciando cli commands para execução:
- docker build -t felipecararosc/pfa-node .
- docker push felipecararosc/pfa-node:latest
- cd nginx
- docker build -t felipecararosc/pfa-nginx .
- docker push felipecararosc/pfa-nginx:latest
- docker network create pfa
- docker run -d --network=pfa --name=nodecontainer -v $(pwd):/usr/src/app felipecararosc/pfa-node
- docker exec -it nodecontainer bash
- npm init -y
- npm install express mysql
- exit
- mkdir mysql
- cd mysql
- docker run --network=pfa --name some-mysql -e MYSQL_DATABASE=nodedb -e MYSQL_ROOT_PASSWORD=root -d -v $(pwd):/var/lib/mysql mysql:5.7
- docker exec -it some-mysql bash
- mysql -uroot -p && usenodedb
- create table course(id int not null auto_increment, name varchar(255), primary key(id));
- exit && exit
- docker rm nodecontainer -f
- docker run -d --network=pfa --name=nodecontainer -v $(pwd):/usr/src/app felipecararosc/pfa-node node index.js
- docker run -d --network=pfa --name pfa-nginx -p 8080:80 felipecararosc/pfa-nginx

# Acesse seu localhost para validar
# Adicionar items na list
- http://localhost:8080/add_list

# Visualizar a list
- http://localhost:8080/

