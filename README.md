# costumers-app
Instruções:
1. inicie o servidor na pasta /backend (siga as instruções do README da própria pasta)
2. inicie o cliente na pasta /frontend (siga as instruções do README da própria pasta)


## Relatório

Eu gostei muito de realizar este desafio. Embota já tinha vivência na maioria das tecnologias, foi realmente um desafio implementar todas as melhores práticas de desenvolvimento que sei em apenas poucos dias. Como tive poucos dias para realizar o teste, acredito que cheguei em um excelente resultado e que implementei tudo que achei necessário dos padrões de desenvolvimento.

----------------------------------------
### Backend - Node.js & Typescript
Eu iniciei o projeto pelo backend, mais especificamente pelo banco de dados e pelas lógicas e Regras de Negócios.

#### OBSERVAÇÕES sobre o desafio proposto: 
 Não foi indicado um nome de tabela, então eu denominei como "COSTUMERS" (clientes)
 Foi pedido para que na tabela tivesse um campo IDADE, porém não é uma boa prática existir isso, já que a idade de uma pessoa muda todo ano. Então, eu criei a tabela com o campo BIRTH_DATE (data de nascimento)

#### ferramentas utilizadas
Banco de Dados: PostgreSQL
Ferramenta para conectar com o BD: TypeORM - serve para criar migrations, models e acessar o banco de dados
Ferramenta para testes: Jest
adicionar Tipagem: Typescript
Servidor e Rotas: Express

----------------------------------------
### Frontend - React.js
Desenvolvido com React, hooks e componentes funcionais

#### ferramentas utilizadas
Biblioteca de estilos: React-Bootstrap
Requisições para a API: Axios
Gerenciamento de Estados: Context API

OBS: Boa prática de CSS - implementação de CSS Modules


