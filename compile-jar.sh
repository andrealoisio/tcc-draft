#!/usr/bin/env bash
cd apps/gisa-informacoes-cadastrais
docker run -it --rm -v "$HOME/.m2":/root/.m2 -v "$(pwd)":/usr/src/myapp -w /usr/src/myapp openjdk:11 ./mvnw clean package -Dmaven.test.skip=true
cd ..
cd ..
cd apps/gerador-dados-legado
docker run -it --rm -v "$HOME/.m2":/root/.m2 -v "$(pwd)":/usr/src/myapp -w /usr/src/myapp openjdk:11 ./mvnw clean package -Dmaven.test.skip=true
cd ..
cd ..
cd apps/gisa-ui
npm run build
cd ..
cd ..