build:
	./compile-jar.sh
run:
	docker-compose up -d
clean:
	docker-compose rm -vf