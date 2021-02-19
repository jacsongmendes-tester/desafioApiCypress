Feature: Cadastro de Usuario e Validacao

    @TC-001
    Scenario Outline: Fluxo Principal - Cadastro de Usuário 
        Then devo realizar cadastro usando metodo POST CREATE USER com os parametros
            | name  | job   | 
            |<name> | <job> | 
        Examples:
        | name         | job     | 
        |Jacson        | QA      | 

    @TC-002
    Scenario Outline: Fluxo Validaçao - Consulta de Usuário 
    Then devo realizar verificaçao de cadastro usando metodo GET USER SINGLE com os parametros
        | id  |name       |
        |<id> | <firstName> |
    Examples:
    | id       | firstName |
    | 2        | Janet     | 
    
    @TC-003
    Scenario Outline:  Fluxos Validação - Validar Cadastro na Lista de Usuarios
       Then devo realizar verificaçao usando metodo GET LIST USERS
        | page  |
        |<page> |
        Examples:
        | page     | 
        | 1        | 

    @TC-004
    Scenario Outline:  Fluxos Atualizaçao - Validar Cadastro na Lista de Usuarios
       Then devo atualizar  os dados usando metodo PACTH USERS
        | id  | name   | job   |
        |<id> | <name> | <job> |
        Examples:
        | id     |  name     | job     |
        | 1      |  Luisa    |  Dev    |
        