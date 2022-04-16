#!/usr/bin/env bash
# kubectl apply -f db-deployment.yaml
kubectl apply -f db-service.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f kafka-service.yaml
# kubectl apply -f components.yaml
kubectl get all
# minikube start --extra-config=kubelet.housekeeping-interval=10s
#
# minikube addons enable metrics-server
#
# ./start.sh
#
# kubectl port-forward service/frontend 3000:3000
# kubectl port-forward service/backend 8080:8080
#
# kubectl -n kube-system rollout status deployment metrics-server
#
# kubectl autoscale deployment backend --cpu-percent=80 --min=1 --max=6
# kubectl autoscale deployment frontend --cpu-percent=80 --min=1 --max=3
#
# minikube delete && minikube start --extra-config=kubelet.housekeeping-interval=10s
#
# wrk -t12 -c400 -d30s http://localhost:8080/atendimentos
# wrk -t12 -c400 -d1m -H "Connection: Close" http://localhost:8080/atendimentos
# This runs a benchmark for 30 seconds, using 12 threads, and keeping 400 HTTP connections open.
