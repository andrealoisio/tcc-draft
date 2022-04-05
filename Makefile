build:
	./compile-apps.sh
run:
	docker-compose up -d --force-recreate
run-dev:
	docker-compose up -d --scale rest=0 --scale react-prod=0 --scale react-dev=0
clean:
	docker-compose down --volumes