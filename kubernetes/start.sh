#!/usr/bin/env bash
# kubectl apply -f db-deployment.yaml
kubectl apply -f db-service.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f kafka-service.yaml
kubectl get all
# kubectl port-forward service/frontend 3000
# kubectl port-forward service/backend 8080