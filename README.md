# Fluxo de aprovação - Approval Flow

## Pré-Requisitos
- Instale as seguintes tecnologias:
- [MySQL](https://www.mysql.com/);
- [Node.js](https://nodejs.org/en/);
- [Angular CLI](https://cli.angular.io/) (para instalar basta executar ```npm install -g @angular/cli```)

## Sobre
- A base de dados será criada automaticamente ao executar a aplicação, é necessário apenas ter o servidor do MySql rodando;
- Os **arquivos minificados** foram gerados pelo Angular pelo comando ```ng build```, estes se encontram na pasta ```..\approval-frontend\dist\approval-frontend```

## Instalação
- 1 - Beixe o projeto;
#### Frontend
- 2 - Pelo Terminal/CMD abra o caminho ```..\approval\approval-frontend``` e execute ```npm install```;
#### Backend
- 3 - Utilizando o eclipse (ou outra IDE de sua preferência) abra a pasta do projeto;
- 4 - Importe o backend do projeto ```..\approval\backend``` e realize o Update Project no Maven;
- 5 - Configure o banco de dados em ```..\backend\src\main\resources\application.properties```

## Executar
#### Backend - Eclipse
- Inicialize o projeto clicando com o botão direito no projeto e executando ```Run As > Spring Boot App```;
- Se a opção ```Run As > Spring Boot App``` não estiver disponível, executar ```Run As > Maven Build...```, em Goals inserir ```spring-boot:run``` e clicar em Run;
#### Frontend - Terminal/CMD
- Pelo Terminal/CMD abra o caminho ```..\approval\approval-frontend``` e execute ```ng serve```
#### Abrir
- No navegador, acesse: http://localhost:4200/

