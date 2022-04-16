#!/usr/bin/env bash

minikube delete
minikube start --extra-config=kubelet.housekeeping-interval=10s
minikube addons enable metrics-server
