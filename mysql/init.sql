CREATE DATABASE pfa;
use pfa;
CREATE TABLE course(id int not null auto_increment, name varchar(255), primary key(id));

INSERT INTO course(name) VALUES('Docker');
INSERT INTO course(name) VALUES('Padrões e técnicas avançadas com Git e Github');
INSERT INTO course(name) VALUES('Integração contínua');
INSERT INTO course(name) VALUES('Kubernetes'); 
INSERT INTO course(name) VALUES('Service Mesh com Istio (em breve)'); 