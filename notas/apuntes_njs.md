/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++*/
<!-- RPi -->
<!-- ssh pi@192.168.1.104 -->
ssh pi@192.168.1.104
<!-- rodando no -->
http://192.168.1.104:3000/api
/*++++++++++++++++++++++++*/
sudo npm init -y

sudo npm i express morgan consign

sudo npm i express
sudo npm i morgan
sudo npm i consign
sudo npm i dblite

/*===============================*/
<!-- --verbose para ver mais detalhes sa instalação-->
sudo npm install --unsafe-perm --only=production --verbose sqlite3
<!-- sudo npm i express morgan sqlite3 -->
/*+++++++++++++++++++++++++*/
<!-- exemplo como testar modulo instalado -->
<!-- node -e 'require("sqlite3")' -->
node -e 'require("sqlite3")'
node -e 'require("dblite")'
node -e 'require("express")'
node -e 'require("consign")'
/*======================================================*/


/*++++++++++++++++++++++++*/

sudo npm i nodemon -D

/*++++++++++++++++++++++++*/
  "scripts": {
    "start": "node src",
    "dev": "nodemon src"
  },
/*++++++++++++++++++++++++*/



[√] testar servidor
[√] criar rotas
[√] criar DB
[√] criar tabelas
[√] criar registros test
[√] conectar node e DB
[√] fazer REST

/*++++++++++++++++++++++++*/

const sqlite = require('sqlite3');


const db = new sqlite.Database('./cnts_db.sqlite', (err)=> console.log('palila error'));


db.all('select * from Users', (err, results)=>{
  console.log(results);
});

/*======================================================*/
ººº SQLITE

<!-- sair de sqlite se precisar-->
.exit

<!-- Abrir o criar banco de dados -->
sqlite3 cnts.db

<!-- ver todas las tablas -->
.table
/*-----------------*/
<!-- craindo as tabelas -->

<!-- id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -->
<!-- 
tab_us
id
usuario
senha
email
 -->

CREATE TABLE usuarios(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(100) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);
/*-----------------*/

/*---------------------------*/
<!-- tab_val -->
<!-- 
id
id_us
tipo
produto
valor
parcelas
data_i
data_f
id_lemb
status

create table tbl1(id int primary key, dt datetime default current_timestamp);
 -->

<!-- saldo -->
<!-- cobro -->
<!-- compra -->


CREATE TABLE tab_val(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_us INTEGER NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  produto VARCHAR(50) NOT NULL,
  valor INTEGER NOT NULL,
  parcelas INTEGER NULL,
  data_i DATETIME NULL,
  data_f DATETIME NULL,
  id_lemb INTEGER NULL,
  status BOOLEAN
);


<!-- apagar tabela -->
DROP TABLE tab_val;

<!-- ver todas las tablas -->
.table

<!-- INCERT -->
INSERT INTO tab_val VALUES(NULL,2,'compra','mercado',150,NULL,'2019-06-28 12:00','2019-06-28 12:00',NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'compra','blusa',45,NULL,'2019-06-28 12:00','2019-06-28 12:00',NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'compra','calça',150,2,'2019-07-28 00:00',2019-08-28 00:00,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'compra','camisa',80,2,'2019-06-28 12:00',2019-08-28 00:00,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'cobro','Itaú',23,NULL,'2019-06-28 12:00',NULL,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'cobro','Pós',888,NULL,'2019-07-20 00:00',NULL,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'cobro','Spotify Nos',30,NULL,'2019-07-20 00:00',NULL,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'cobro','Spotify Santy',30,NULL,'2019-07-20 00:00',NULL,NULL,1);
INSERT INTO tab_val VALUES(NULL,1,'cobro','Netflix',28,NULL,'2019-07-20 00:00',NULL,NULL,1);

<!-- ver registros -->
SELECT * FROM tab_val;
/*-----------------*/
<!-- tab_lem -->
<!-- 
id
id_us
tipo
titulo
texto
data_i
data_f
status
 -->


CREATE TABLE tab_lem(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_us INTEGER NOT NULL,
  tit VARCHAR(50) NOT NULL,
  txt VARCHAR(500) NOT NULL,
  data_i DATETIME NULL,
  data_f DATETIME NULL,
  status BOOLEAN
);

<!-- INCERT -->
INSERT INTO tab_lem VALUES(NULL, 1, 'Primera Anotação', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora quia ea sunt modi quisquam.', '2019-06-28 12:00', '2019-06-28 12:00', 1 );
INSERT INTO tab_lem VALUES(NULL, 2, 'Segunda Anotação', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora quia ea sunt modi quisquam.', '2019-06-28 12:00', '2019-06-28 12:00', 1 );
INSERT INTO tab_lem VALUES(NULL, 1, 'Terceira Anotação', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora quia ea sunt modi quisquam.', '2019-06-28 12:00', '2019-06-28 12:00', 1 );
INSERT INTO tab_lem VALUES(NULL, 3, 'Quarta Anotação', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora quia ea sunt modi quisquam.', '2019-06-28 12:00', '2019-06-28 12:00', 1 );


<!-- apagar tabela -->
DROP TABLE tab_lem;

<!-- ver todas las tablas -->
.table

<!-- ver registros -->
SELECT * FROM tab_lem;

/*-----------------*/








<!-- ver la tabla usuarios -->
.schema usuarios

<!-- ver todas las tablas -->
.table


<!-- crair arquivo .sql -->
<!-- fica de olho no nome da tabela usuarios-->
INSERT INTO usuarios VALUES(NULL, 'nome1', 'senha12345', 'nome1@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome2', 'senha12345', 'nome2@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome3', 'senha12345', 'nome3@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome4', 'senha12345', 'nome4@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome5', 'senha12345', 'nome5@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome6', 'senha12345', 'nome6@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome7', 'senha12345', 'nome7@email.com');
INSERT INTO usuarios VALUES(NULL, 'nome8', 'senha12345', 'nome8@email.com');

<!-- Importe estes comandos no sqlite. -->
sqlite3 cnts.db < dados.sql


<!-- Abra o SQLite3 novamente, e visualize os dados. -->

sqlite3 cnts.db

sqlite> SELECT * FROM usuarios;

<!-- Você pode exibir o nome das colunas digitando -->
sqlite> .header on

/*++++++++++++++++++++++++++++++++++++++++*/
<!-- Para escrever o resultado num arquivo externo digite -->
sqlite> .output resultado.txt
sqlite> SELECT * FROM usuarios;
sqlite> .exit

cat resultado.txt
/*++++++++++++++++++++++++++++++++++++++++*/
<!-- Adicionando uma nova coluna na tabela usuarios. -->

sqlite> ALTER TABLE usuarios ADD COLUMN bloqueado BOOLEAN;
No SQLite3 os valores para boolean são 0 (falso) e 1 (verdadeiro).

<!-- Visualizando as colunas da tabela usuarios. -->
sqlite> PRAGMA table_info(usuarios);

<!-- Alterando os valores do campo bloqueado. -->
sqlite> UPDATE usuarios SET bloqueado=0; -- comentario: Atualiza todos os registros para Falso.
sqlite> UPDATE usuarios SET bloqueado=1 WHERE id=1; -- Atualiza apenas o registro com id=1 para Verdadeiro.
sqlite> UPDATE usuarios SET bloqueado=1 WHERE UF='RJ'; -- Atualiza para Verdadeiro todos os registros com UF='RJ'.

<!-- Faça um SELECT novamente para ver o resultado. -->

<!-- Deletando registros. -->
sqlite> DELETE FROM usuarios WHERE id=4;

<!-- Cuidado: se você não usar o WHERE e escolher um id você pode deletar todos os registros da tabela. -->
<!-- Você pode exibir os dados na forma de coluna. -->

sqlite> .mode column

/*++++++++++++++++++++++++*/





/*======================================================*/

<!-- ver tabla - abre db - ver tabelas - ligarcabesalhos colunas, SELECT para ver-->

$sqlite3 cnts.db
sqlite> .tables
sqlite> .header on
sqlite> .mode column
sqlite> SELECT * FROM usuarios;

<!-- cambiar de nombe a tabela -->
<!-- sqlite> ALTER TABLE clientes_novo RENAME TO clientes; -->

ALTER TABLE usuarios RENAME TO tab_us;






/*======================================================*/
<!-- index -->

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const sqlite = require('sqlite3');
const app = express();


const db = new sqlite.Database('src/db/cnts.db', (err) => console.log('palila error'));

// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
// routes
app.use('/', (req,res) => {
  db.all('select * from usuarios', (err, results) => {
    console.log(results);
  });
  res.send('primera ruta');
});
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
/*======================================================*/










/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

sudo npm init -y

sudo npm i express
sudo npm i morgan
sudo npm i nodemon -D


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

sudo npm i express sqlite3 sequelize consign
sudo npm install --save sqlite3
sudo npm i consign

sudo npm i @babel/core @babel/cli @babel/preset-env @babel/node -D

npm i nodemon -D





npm i @babel/core @babel/cli @babel/preset-env @babel/node -D
<!-- npm run babel-node -->
<!-- npm run dev -->
npm i consign





mysql -u <username> -p <database-name>
mysql -u pi -p <database-name>

<!-- sudo npm uninstal nodemon -->
sudo npm uninstal typescript








/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- install node ultima verção -->
sudo su;
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | bash;
exit;
node -v;










/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
Crear projeto con el nombre lde la pasta njs02

sudo express -e njs02
sudo express -e njs04

ò (preparado para git)
express -e --git njs02



<!-- dentro da pasta dar install, muchas dependencias -->
<!-- descargar directo no servidor -->

sudo npm install
sudo npm install mongodb

<!-- npm start -->

<!-- Cria um arquivo db.js na raiz -->
<!-- estudar Padrão repository escalavel-->


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- recurso para resetar server -->
sudo npm install -g nodemon

<!-- en visual studio -->
sudo npm install nodemon --save-dev

<!-- CONSING -->
sudo npm install consign --save

<!-- etnonces -->
{
  "name": "portal_noticias",
  "version": "1.0.0",
  "description": "Site de notícias",
  "main": "noticias.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Claudio Junior",
  "license": "ISC",
  "dependencies": {
    "ejs": "^2.5.6",
    "express": "^4.15.3"
  },
  "devDependencies": {
    "nodemon": "^1.18.11"
  }
}



<!-- body-parser -->
sudo npm install body-parser --save

sudo npm install body-parser --save --unsafe-perm=true --allow-root

Hit error EACCES: permission denied mkdir
sudo npm install body-parser

 '/Users/segodimo/njs/njsu01/node_modules/fsevents/lib' 

## sudo npm install --unsafe-perm=true --allow-root

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

npm uninstall <name> --save
sudo npm uninstall body-parser --save

npm uninstall <name> --save-dev
sudo npm uninstall body-parser --save-dev

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


XNS40402400033942990923176


sudo npm install mysql --save


/Applications/XAMPP/xamppfiles/bin/mysql -u root -p
sudo /Applications/XAMPP/xamppfiles/bin/mysql.server start

sudo /Applications/XAMPP/xamppfiles/bin/mysql -u root -p

sudo /Applications/XAMPP/xamppfiles/bin/mysql.server start

sudo /Applications/XAMPP/xamppfiles/bin/mysql --user=root --password=




use njsu01db;


mysql-test-8.0.15-macos10.14-x86_64.tar.gz

tar -xzvf arquivo.tar.gz
tar -xzvf mysql-test-8.0.15-macos10.14-x86_64.tar.gz


Host	localhost
Port	8889
User	root
Password	root
Socket	/Applications/MAMP/tmp/mysql/mysql.sock


/Applications/MAMP/tmp/mysql/mysql.sock

/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot



$user = 'root';
$password = 'root';
$db = 'inventory';
$host = 'localhost';
$port = 8889;

$link = mysql_connect(
   "$host:$port", 
   $user, 
   $password
);
$db_selected = mysql_select_db(
   $db, 
   $link
);



$user = 'root';
$password = 'root';
$db = 'inventory';
$socket = 'localhost:/Applications/MAMP/tmp/mysql/mysql.sock';


// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "12.34.56.78",
  user: "peter",
  password: "1234",
  database: "southwind"
});



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//////////////////////////////////////////////////////////////////////////////////////////////////
2019-04-12T17:16:17.539941Z 1 [Note] A temporary password is generated for root@localhost: s0n6eGvXH:bd

If you lose this password, please consult the section How to Reset the Root Password in the MySQL reference manual.


ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
//////////////////////////////////////////////////////////////////////////////////////////////////


sudo 
/usr/local/mysql/bin/mysql -u root -p 1q2w3e4r


open -t .bash_profile


/usr/local/mysql-8.0.15-macos10.14-x86_64/bin/mysql -u root -p 1q2w3e4r

export PATH=${PATH}:/usr/local/mysql-8.0.15-macos10.14-x86_64/bin/mysql

export PATH=${PATH}:/usr/local/mysql/bin/mysql
export PATH=$PATH:/usr/local/mysql/bin/mysql

mysql -u root -p 4r3e2w1q

sudo mysql -u root -p

/usr/local/mysql/bin/mysql -u root -p 1q2w3e4r
export PATH=$PATH::/usr/local/mysql/bin/mysql -u root -p 1q2w3e4r

mysql -u root -p -h localhost


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*======================================================*/
sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables

mysql -u root

use mysql;

UPDATE user SET authentication_string='Rec@#2019#@' WHERE user='root@localhost';
UPDATE user SET authentication_string='Rec@#2019#@' WHERE user='root';

FLUSH PRIVILEGES;

<!-- sair -->
\q

/*======================================================*/
sudo mysql -u root -p
mysql -u root -p
Rec@#2019#@
/*======================================================*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables
mysql -u root
UPDATE user set password for root@localhost=password('');

update user set password=PASSWORD("Rec@#2019#@") where User='root'; 

UPDATE user SET Password=password('Rec@#2019#@') WHERE User='root';

FLUSH PRIVILEGES; exit; 

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*======================================================*/
sudo launchctl unload -w /Library/LaunchDaemons/com.mysql.mysql.plist
sudo pkill mysqld
/*======================================================*/

cd /usr/local/mysql/bin/
./mysql -u root -p 
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
sudo /usr/local/mysql/support-files/mysql.server stop

sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables

mysql -u root

FLUSH PRIVILEGES;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'Rec@#2019#@';
<!-- ALTER USER 'root'@'localhost' ERROR 1396 (HY000): Operation ALTER USER failed-->


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
use mysql; 

UPDATE user SET authentication_string=PASSWORD("qwer") where User='root'; 

UPDATE user SET plugin="mysql_native_password"; 

FLUSH PRIVILEGES; 

quit;
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'qwer';
UPDATE user SET authentication_string=PASSWORD("qwer") WHERE User='root';


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
mysql client - mysql -u root 


sudo mysql -u root 
use mysql;

update user set password=PASSWORD("Rec@#2019#@") where User='root';

UPDATE user SET Password=password('Rec@#2019#@') WHERE User='root';

update user set password=PASSWORD("Rec@#2019#@'") where User='root';

UPDATE user SET Password=password('Rec@#2019#@') WHERE User='root';

UPDATE user SET authentication_string='Rec@#2019#@' WHERE user='root@localhost';

/*======================================================*/
UPDATE user SET authentication_string='Rec@#2019#@' WHERE user='root';

SET PASSWORD FOR root = 'Rec@#2019#@';

/*======================================================*/

SET PASSWORD FOR 'root' = PASSWORD('elephant7');
SET PASSWORD FOR root = 'elephant7' 
UPDATE user SET password=password('elephant7') WHERE user='root';
UPDATE user SET authentication_string=password('elephant7') WHERE user='root';


UPDATE user SET Password
error in your SQL synta
mysql 8,0,15

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*======================================================*/
sudo /usr/local/mysql/support-files/mysql.server start
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server restart
/*======================================================*/


sudo /usr/local/mysql/support-files/mysql.server stop









/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- MYSQL -->
ALTER USER USER() IDENTIFIED BY '1234';

create database njsu01db;

use njsu01db;

create table noticias(
	id_noticia int not null primary key auto_increment,
	titulo varchar(100),
	noticia_text varchar(500),
	data_criacao timestamp default current_timestamp
);

show tables;

insert into noticias (titulo, noticia_text) values('Titulo Da Noticia 01', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
insert into noticias (titulo, noticia_text) values('Titulo Da Noticia 02', 'Segundo lorem ipsum dolor sit amet, consectetur adipisicing elit.');
insert into noticias (titulo, noticia_text) values('Titulo Da Noticia 03', 'libero repellat impedit sequi labore alias, quisquam consectetur quis.');

select * from  noticias;
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/













/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
Ag 3598x
Cc 189766
Fabiana Oliveira de Araujo
cpf 021.641.731-71

R$95

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
MONGODB
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


cd /Applications/mongodb-osx-x86_64-4.0.8/

<!-- crea una pasta por ejemplo dbnsj04 -->


<!-- entra na pasta bin -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin


./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04

<!-- INICIOANDO MONGO mudando porta-->
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27017
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27018


<!-- EM OUTRO TERMINAL -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin 
./mongo

<!-- se mudei a porta então indoca porta -->
./mongo --port 27018


show databases


<!-- SELECCIONA LA TALEBA QUE VAI USAR -->
use njsdb02

db.clientes.count()

<!-- ADICIONAR -->
db.clientes.insert({nome: "Wmorg", cidade: "Campinas", idade: 33})

db.clientes.insert({nome: "Thomas", cidade: "Florida", idade: 33, tags: ["teste1", "test2"]})


<!-- ADICIONAR VARIAS LINHAS (EN LOTE)-->
<!-- db.clientes.insert([{},{},{}]) -->
db.clientes.insert([{nome: "Wmorg", cidade: "Campinas", idade: 33}, {nome: "Amelia", cidade: "Cambui", idade: 35}, {nome: "Mariana", cidade: "Araras", idade: 46}, {nome: "Martin", cidade: "Disneilandia", idade: 20}])


<!-- APAGAR LINHA -->
db.clientes.remove({_id: ObjectId("5cace8cf3b69f752fee2bcab")})



<!-- VER -->
db.clientes.count()
db.clientes.find()
db.clientes.find().pretty()


<!-- FILTRO CON PARAMETRO -->
db.clientes.find({idade: 33}).pretty()
db.clientes.find({idade: 33, cidade: "Campinas"}).pretty()

<!-- filtro coringa -->
db.clientes.find({cidade: {$regex: /C/}}).pretty()
db.clientes.find({nome: {$regex: /M/}}).pretty()

<!-- FILTRO EXPREÇÃO REGULAR -->
db.clientes.find({nome: {$regex: /[am]/}}).pretty()

<!-- FILTRO OPERADORES -->
ne diferente !=
gt >
gte >=
lt <
lte <=

db.clientes.find({idade: {$gte: 15} }).pretty()
db.clientes.find({idade: {$eq: 33} }).pretty()

db.clientes.find({ {$tags: {$in: ["teste1","teste3"] } }).pretty()
db.clientes.find({ {$tags: {$all: ["teste1","teste2"] } }).pretty()



<!-- ingorar os primeiros resultados -->
db.clientes.find().skip(1).pretty()

<!-- pegar um numero de resultados a partir de na sequanecia -->
db.clientes.find().limit(1).pretty()


db.clientes.find().skip(1).limit(1).pretty()


<!-- ordenar resultados 1 crecente -1 decresente -->
db.clientes.find({}).sort({idade: 1}).pretty()

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

<!-- UPDATE (editar uma FILA) -->
db.clientes.update({cidade: "Campinas"}, {nome: "Snark"})
db.clientes.update({nome: "Snark"}, {nome: "Snark", cidade: "Campinas", idade: 33})

<!-- UPDATE (editar uma celula) -->
db.clientes.updateOne({_id: ObjectId("5cace7303b69f752fee2bca9")}, {$set: {idade: 15}})



<!-- APAGAR CAMPO (editar uma celula) -->
db.clientes.updateOne({_id: ObjectId("5cacf2d13b69f752fee2bcae")}, {$unset: {idade: null}})


<!-- UPDATE (editar uma celula) -->
db.clientes.updateOne({_id: ObjectId("5cacf2d13b69f752fee2bcae")}, {$set: {idade: 18}})
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



 <!-- INCREMENTAR CAMPO TENTA USAR $INC E NÃO $SET -->
db.clientes.updateOne({_id: ObjectId("5cacf2d13b69f752fee2bcae")}, {$set: {voto: 1}})

db.clientes.updateOne({_id: ObjectId("5cacf2d13b69f752fee2bcae")}, {$inc: {voto: 1}})



<!-- MULTIPLICAR -->
db.clientes.updateOne({_id: ObjectId("5cace8cf3b69f752fee2bcad")}, {$set: {voto: 2}})



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

<!-- MANDO ATUALIZAR SE NÃO EXISTIR CRIA PARA MIM -->

db.clientes.update({nome: "Pepito"}, {nome: "Pepito", cidade: "São Paulo", idade: 22}, {upsert: true})


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
INTERFACE GRAFICA
STUDIO 3T





/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- IMPORTAT UM CSV -->
mongoimport -d mydb -c things --type csv --file locations.csv --headerline
mongoimport --host=127.0.0.1
 -d mydb -c things --type csv --file locations.csv --headerline


 ./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 --port 27017
 

127.0.0.1

./mongoimport  --host=270017 --port 27017 --db resultdb -c resulttb --type csv  --file /Applications/mongodb-osx-x86_64-4.0.8/respostas_02.csv

./mongoimport  --host=270017 --port 27017 --db resultdb -c resulttb --type csv  --file /Applications/mongodb-osx-x86_64-4.0.8/respostas_02.csv --headerline

/*======================================================*/
<!-- FUNCIONOU -->
./mongoimport  --host=127.0.0.1 --port 27018 --db resultdb -c resulttb --type csv  --file /Applications/mongodb-osx-x86_64-4.0.8/respostas_02.csv --headerline
<!-- EJEMPLO 2  -->
./mongoimport  --host=127.0.0.1 --port 27017 --db db_njs07 -c tb_result --type csv  --file /Applications/mongodb-osx-x86_64-4.0.8/respostas_02.csv --headerline
/*======================================================*/










<!-- INICIOANDO MONGO mudando porta-->
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27017
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27018


<!-- EM OUTRO TERMINAL -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin 
./mongo

<!-- se mudei a porta então indoca porta -->
./mongo --port 27018


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- CREANDO UN USUARIO E SENHA PARA MONGO -->

<!-- num TERMINAL -->
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04


<!-- EM UM NOVO TERMINAL -->
./mongod --port 27017 --dbpath /data/db


<!-- Conectese - Conecte-se à instância. -->
./mongo --port 27017


<!-- Crie o administrador do usuário (no banco de dados de autenticação do administrador) . -->
use admin
db.createUser(
  {
    user: "root",
    pwd: "1234",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

<!-- Re-start the MongoDB instance with access control. -->
./mongod --auth --port 27017 --dbpath /data/db


<!-- Conecte e autentique como o administrador do usuário. -->
<!-- mongo --port 27017 -u "myUserAdmin" -p "abc123" --authenticationDatabase "admin" -->

./mongo --port 27017 -u "root" -p "1234" --authenticationDatabase "admin"


<!-- Crie usuários adicionais conforme necessário para sua implantação (por exemplo, no banco de dados de autenticação de teste) -->

use us_tst
db.createUser(
  {
    user: "ussego",
    pwd: "1234",
    roles: [ { role: "readWrite", db: "us_tst" },
             { role: "read", db: "reporting" } ]
  }
)

<!-- Conecte e autentique como myTester. -->
<!-- ./mongo --port 27017 -u "myTester" -p "xyz123" --authenticationDatabase "test" -->

./mongo --port 27017 -u "ussego" -p "1234" --authenticationDatabase "us_tst"


./mongod.conf

./mongod -f /etc/mongod.conf

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



<!-- para ver: -->
use resultdb

<!-- ver tabla resulttb -->
db.resulttb.find()
db.resulttb.find().pretty()

<!-- ver cuantas linhas -->
db.resulttb.count()

<!-- ver tablas -->
show tables


"Carimbo de data/hora"
"Qual seu gênero?"
"Aproximadamente, qual é a sua renda mensal familiar? (R$)"
"Em que ano você nasceu? (Digite o ano de nascimento no formato de 4 dígitos, ex. 1976.)"
"Quando você compra produtos e alimentos, quanto as preocupações com o meio ambiente interferem na sua decisão de compra"
"Quais as opções abaixo você acha mais interessante?"
"Você consome ou já consumiu algum produto natural (sem conservantes, elementos sintéticos ou saturados ) ?"
"Com qual frequência você consome produtos naturais ?"
"Qual o principal motivo que te leva a consumir produtos naturais?"
"Porque você não faz uso de produtos naturais?"
"Você acha vantajoso criar um produto com características menos indústriais e mais naturais (sem conservantes, elementos sintéticos ou saturados)?"
"O que você acha de um “creme dental Eco-Friendly, livre de flúor e elementos sintéticos ou saturados, feita integralmente com ingredientes naturais, sendo sua embalagem reciclável ou 100% biodegradável""? Em uma escala de 1 a 5, o quanto você gostou do conceito que você acabou de ler (sendo 1 para o que você menos gostou e 5 para o que você mais gostou)"
"Qual faixa de preço você considera justa para o nosso creme dental natural, em reais com 75ml (100g)?"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Menor preço]"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Melhor custo benefício]"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Marca]"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Sabor]"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Embalagem]"
"Na compra de um creme dental, enumere de 1 a 5 os critérios que são mais relevante para você (1 para menos relevante e 5 para mais relevante) [Indicação do dentista]"
"Você compraria o nosso produto?"
"Você é profissional odontológico?"
"Contém extratos e substâncias que naturais bloqueiam o metabolismo das bactérias. Neutraliza o pH da boca. Não possui corantes e nem conservantes artificiais. É livre de flúor/fluoreto. Produto totalmente eco-friendly (embalagem biodefradável, ingredientes naturais, não são realizados testes em animais, matérias primas 100% renováveis, entre outras medidas sustentáveis)"



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var url = "mongodb://root:1234@localhost:27017";
MongoClient.connect(url, function(err, db) {

<!-- test 1 -->
  // if(!err) {
  //   console.log(db);
  //   db.close();
  // }

<!-- test 2 -->
  // if (err) throw err;
  // var dbo = db.db("resultdb");
  // //Find the first document in the customers collection:
  // dbo.collection("resulttb").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });


<!-- test 3 -->
  if (err) throw err;
  var dbo = db.db("resultdb");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { address: "Park Lane 38" };
  dbo.collection("resulttb").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- db.js -->
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://root:1234@localhost:27017";
mongoClient.connect(url)
  .then(conn => global.connection = conn.db("resultdb"))
  .catch(err => console.log(err))

function findAll(callback){
  global.connection.collection("resulttb").find().toArray(callback);
}


module.exports = {findAll};
/*+++++++++++++++++++++++++++++++*/
<!-- index.js -->
var express = require('express');
var router = express.Router();

<!-- /* GET home page. */ -->
router.get('/', function(req, res, next) {
  var db = require("../db");
  db.findAll(function(err, docs){
    if(err)
      res.render('index', { title: 'ERRO', clientes: docs});
    else
      res.render('index', { title: 'Express', clientes: docs});
      // console.log(docs);
  });

});

module.exports = router;

/*+++++++++++++++++++++++++++++++*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


nodemon app


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- na app -->
var msg = require('./mod_teste');

app.listen(3000, function(){
    // console.log("Servidor rodando com Express");
    console.log(msg());
});

<!-- no modulo -->
module.exports = function(){
    var msg = "momomomom";
    return msg;
}
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/










/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
sudo npm init --yes

sudo npm install express mongoose ejs morgan

<!-- sudo npm i nodemon -->
<!-- sudo npm uninstal nodemon -->

sudo npm i nodemon -D

/*---------------------------*/

<script>
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('server on port 3000');
});
</script>

cd scr
node app.js


/*---------------------------*/
package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  <!-- por... -->

  "scripts": {
    "dev": "nodemon ./src/app.js",
    "start": "node ./src/app.js"
  },

npm run dev
/*---------------------------*/
crea variable
app.set('port', process.env.PORT || 3000);

chama variable
${app.get('port')}

<script>

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
++++++++++++
</script>
/*---------------------------*/
<script>
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
</script>
/*---------------------------*/
<script>
const morgan = require('morgan');
// middlewares
app.use(morgan('dev'));
</script>
/*---------------------------*/
// index
<script>
const express = require('express');
const router = express.Router();
module.exports = router;
</script>
app
<script>
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
// importing routes
const indexRoutes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares
app.use(morgan('dev'));
// routes
app.use('/', indexRoutes);
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
</script>
/*---------------------------*/
<script>
app.use(express.urlencoded({extended: false}))
</script>
/*---------------------------*/
INICIAR MONGODB
<!-- entra na pasta bin -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04
<!-- INICIOANDO MONGO mudando porta-->
<!-- ./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27017 -->
<!-- ./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/dbnsj04 -port 27018 -->
<!-- EM OUTRO TERMINAL -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin 
./mongo
<!-- se mudei a porta então indoca porta -->
<!-- ./mongo --port 27018 -->
show databases
<!-- SELECCIONA LA TALEBA QUE VAI USAR -->
use njsdb02
db.clientes.count()
<!-- VER -->
db.clientes.count()
db.clientes.find()
db.clientes.find().pretty()
/*---------------------------*/
<script>
const mongoose = require('mongoose');
// +++++++++++++++
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
</script>


<script>
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
// importing routes
const indexRoutes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
</script>
/*---------------------------*/
modules/task.js
<script>
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('tasks', TaskSchema);
</script>
/*---------------------------*/
index.js
<script>
router.get('/', (req, res) => {
	// res.send('AWAWAWAW');
	res.render('index');
});
</script>
index.ejs
<script>
<% include partials/_header %>
<% include partials/_footer %>
</script>
/*---------------------------*/
use crud-mongo
show collections
db.tasks.find().pretty()
/*---------------------------*/

/*---------------------------*/

/*---------------------------*/

/*---------------------------*/

























/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*---------------------------*/
[] criar Back-Eed Node.js e SQLite
  [] API val
  [] API us
  [] API lemb

[] Criar Frond-End React Ionic
/*---------------------------*/
tab_val

id
id_us
tipo
produto
valor
data_i
data_f
id_lemb
status

<!-- saldo -->
<!-- cobro -->
<!-- compra -->
/*-----------------*/
tab_us

id
usuario
senha
email
/*-----------------*/
tab_lem

id
id_us
tipo
titulo
texto
data_i
data_f
status
/*-----------------*/

/*---------------------------*/
npm init -y
npm i express sqlite3 sequelize
npm i @babel/core @babel/cli @babel/preset-env @babel/node -D
npm i nodemon -D
<!-- npm run babel-node -->
<!-- npm run dev -->
npm i consign
/*---------------------------*/

http://localhost:3000/users

{
  "name": "Sebastian",
  "password": "1234",
  "email": "segodimo@gmail.com"
}

/*---------------------------*/


ps aux | grep node
kill -9 num_processo


/*---------------------------*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- sudo npm i sqlite3 -->
<!-- no funcionou na raspberry
sudo npm install --unsafe-perm --verbose -g sails
sudo npm install --unsafe-perm --verbose -g sqlite3
sudo npm install --unsafe-perm --only=production --verbose sqlite3
sudo npm install sqlite3 --sqlite=/usr

sudo npm install sqlite3 --sqlite=/usr

http://webreflection.blogspot.com/2013/07/dblite-sqlite3-for-nodejs-made-easy.html
https://www.npmjs.com/package/sqlite3

export LDFLAGS="-L/usr/local/lib"
export CPPFLAGS="-I/usr/local/include -I/usr/local/include/sqlcipher"
export CXXFLAGS="-I/usr/local/include -I/usr/local/include/sqlcipher"
npm install sqlite3 --build-from-source --sqlite_libname=sqlcipher --sqlite=/usr/local --verbose

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

sudo apt-get install libsqlite3-dev
sudo npm install sqlite3 --build-from-source --sqlite=/usr --verbose
 -->
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*---------------------------*/

/*---------------------------*/

/*---------------------------*/

/*---------------------------*/

/*---------------------------*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/






/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/








































































































































