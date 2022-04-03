#!/usr/bin/env bash
curl -H 'Content-Type: application/json' localhost:8083/connectors --data '
{
  "name": "legacy-connector",  
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector", 
    "database.hostname": "legacy_db", 
    "database.port": "5432", 
    "database.user": "postgres", 
    "database.password": "postgres", 
    "database.dbname" : "gisa", 
    "database.server.name": "legacy",
    "key.converter.schemas.enable": false,
    "value.converter.schemas.enable": false,
    "table.exclude.list": "legacy.public.databasechangelog, legacy.public.databasechangeloglock"
  }
}'
# localhost:8083/connectors
# http://localhost:8083/connectors/legacy-connector