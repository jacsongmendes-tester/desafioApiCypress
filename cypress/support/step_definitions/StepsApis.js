import { When, Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import ControllerApis from '../controller/ControllerApis'
//Conexao entre as features e metodos de execucao.

const controllerApis = new ControllerApis

Then("devo realizar cadastro usando metodo POST CREATE USER com os parametros", (params) => {
    controllerApis.createUser(params);
})


Then("devo realizar verificaçao de cadastro usando metodo GET USER SINGLE com os parametros", (params) => {
    controllerApis.searchUser(params);
})

Then("devo realizar verificaçao usando metodo GET LIST USERS", (params) => {
    controllerApis.searchAllUser(params);
})

Then("devo atualizar  os dados usando metodo PACTH USERS", (params) => {
    controllerApis.updateUser(params);
})





