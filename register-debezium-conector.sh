#!/usr/bin/env bash
curl -H 'Content-Type: application/json' localhost:8083/connectors --data '
{
  "name": "legacy-connector",  
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector", 
    "database.hostname": "legacy_db", 
    "database.port": "5432", 
    "database.user": "legacy_user", 
    "database.password": "abc123!@#", 
    "database.dbname" : "legacy_db", 
    "database.server.name": "legacy",
    "key.converter.schemas.enable": false,
    "value.converter.schemas.enable": false
  }
}'