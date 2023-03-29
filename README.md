
# Desafio HVEX

Desafio técnico para vaga de desenvolvedor frontend, utilizando o ReactJS

## Rodar localmente

Clone o projeto

```bash
ssh>
  git clone git@github.com:vgabrielk/frontendchallenge-hvex.git

https>
  git clone https://github.com/vgabrielk/frontendchallenge-hvex.git
```

Vá até o diretório do projeto

```bash
  cd frontendchallenge-hvex
```

1 - Rode o seguinte comando dentro da pasta do projeto 
( Apenas usar sudo se estiver no terminal linux )
```bash
    sudo docker build -t frontend-hvex .
```
2 - Agora rode o seguinte comando : 
```bash
    sudo docker run -p 8080:8080 -d frontend-hvex
```

3 - Seu servidor irá em uma dessas portas abaixo : 
```bash
   http://localhost:8080/ ou http://0.0.0.0:8080/
```

## Testes unitários

Ainda no diretório raiz, execute o seguinte comando : 

```bash
  npm run test
```





## Deploy
(https://desafio-hvex.netlify.app/)

