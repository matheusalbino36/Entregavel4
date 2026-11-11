# Entregável 5 — Algoritmos fundamentais

O projeto contém implementações dos algoritmos fundamentais em Java e JavaScript.
As funções JavaScript podem ser importadas para testes unitários e os scripts
continuam disponíveis para execução interativa no terminal.

## Testes em JavaScript

Na raiz do projeto, instale as dependências e execute os testes com Jest:

```sh
npm install
npm test
```

Os algoritmos estão em `funcoes/` e cada um possui um arquivo de teste próprio
em `tests/`. As funções validam as entradas e lançam `TypeError` quando recebem
valores inválidos.

## Executar um algoritmo interativamente

Use Node.js com o caminho do script desejado, por exemplo:

```sh
node javascript/Entregavel1_JavaScript/1_numero_primo.js
```
