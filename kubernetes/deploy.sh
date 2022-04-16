#!/usr/bin/env bash

killall kubectl -9

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f db-service.yaml
kubectl apply -f kafka-service.yaml

kubectl rollout status deployment backend
kubectl rollout status deployment frontend
kubectl autoscale deployment backend --cpu-percent=50 --min=1 --max=6

kubectl port-forward service/frontend 3000:3000 &

while ! curl --output /dev/null --silent --head --fail http://localhost:8080/ping
do
  kubectl port-forward service/backend 8080:8080 &
  sleep 5
done
echo "Ready to use 😄😄😄"