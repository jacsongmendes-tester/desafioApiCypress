# desafioApiCypress
Projeto de automação desafio, desenvolvido em Cypress

Pré requisito: 
Versão:
Node: v14.15.5
Cypress: 6.5.0,
Cypress-cucumber-preprocessor: 2.5.4

Estruturando o projeto:
O Cypress pode ser utilizado sem Cucumber com uma estrutura simples explicada na documentação. Porém Eu utilizei na estrutura ferramenta de escrita de testes em BDD com sintax do Gherkin.
Principais Pastas:
Integration: coloquei o arquivo "projectAutomation\cypress\integration\tests-api.feature" com os cenários de teste escritos no formato BDD.
Steps_definition: nesta pasta coloquei os passos que faz conexao com a Feature escrita em BDD e os mêtodos que fiz em Cypress.
controller: nesta pasta coloquei os metodos feito com o Cypress.


Comandos de Execução: 
1- npm run test:all  (Para executar todo os cenarios da feature)
2- npm run test:TC01 (Para executar todo os cenarios TC-01 da feature)
3- npm run test:TC02 (Para executar todo os cenarios TC-02 da feature) 
4- npm run test:TC03 (Para executar todo os cenarios TC-03 da feature)
5- npm run test:TC04 (Para executar todo os cenarios TC-04 da feature) 
