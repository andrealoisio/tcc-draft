# tcc-draft

## How to run
```
cd apps/quarkus-kotlin-rest-api
./mvnw package
cd ../..
docker-compose up
```

Go to your browser and check http://localhost:8000/ping

## How to stop all containers

```
docker-compose down
```

# Postgresql & PgAdmin powered by compose


## Requirements:
* docker >= 17.12.0+
* docker-compose

## Quick Start
* Clone or download this repository
* Go inside of directory,  `cd compose-postgres`
* Run this command `docker-compose up -d`


## Environments
This Compose file contains the following environment variables:

* `POSTGRES_USER` the default value is **postgres**
* `POSTGRES_PASSWORD` the default value is **postgres**
* `PGADMIN_PORT` the default value is **5050**
* `PGADMIN_DEFAULT_EMAIL` the default value is **pgadmin4@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**

## Access to postgres:
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** postgres (as a default)

## Access to PgAdmin:
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)

## Add a new server in PgAdmin:
* **Host name/address** `postgres`
* **Port** `5432`
* **Username** as `POSTGRES_USER`, by default: `postgres`
* **Password** as `POSTGRES_PASSWORD`, by default `postgres`


## Maven
* **comando maven /c skip testes** ./mvnw package -Dmaven.test.skip=true**
## Liquibase
* **comando maven para gerar changeLog Baseline liquibase** ./mvnw liquibase:generateChangeLog**
* **comando maven para subir em banco os changeLogs liquibase** ./mvnw liquibase:update**
* **comando maven para marcar os objetos que já existem no banco liquibase** ./mvnw liquibase:changelogSync**


