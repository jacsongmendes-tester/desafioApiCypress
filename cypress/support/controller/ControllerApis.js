/// <reference types="Cypress" />

const baseUrl = "https://reqres.in/"
//Classe que centralizar todos funcões utilizadas nos testes, contendo os scripts do cypress
class ControllerApis {
    // execuçao da api de criaçao de user
    createUser(parametros){
        parametros.hashes().forEach(params => {
            cy.request({
                method: 'POST',
                url: baseUrl+'api/users',
                body: {
                    'name': params.name,
                    'job': params.job

                },
                headers:{
                    'content-type' : 'application/json'
                }
            }).then(function (response){
                expect(response.status).to.equal(201);
                expect(response.body.name).to.equal(params.name);
                expect(response.body.job).to.equal(params.job)
                cy.log("[LOG][SUCESSO]:"+response.body)
            });
        });
    }

    searchUser(parametros){
        parametros.hashes().forEach(params => {
            cy.request({
                method: 'GET',
                url: baseUrl+'api/users/'+params.id,
            }).then(function (response){
                expect(response.status).to.equal(200);
                expect(response.body.data.first_name).to.equal(params.name);      

            });
        });
    }

    searchAllUser(parametros){
        parametros.hashes().forEach(params => {
            cy.request({
                method: 'GET',
                url: baseUrl+'api/users/?page='+params.page,
            }).then(function (response){
                expect(response.status).to.equal(200);

            });
        });
    }

    updateUser(parametros){
        parametros.hashes().forEach(params => {
            cy.request({
                method: 'PATCH',
                url: baseUrl+'api/users/'+params.id,
                body: {
                    'name': params.name,
                    'job': params.job

                },
                headers:{
                    'content-type' : 'application/json'
                }
            }).then(function (response){
                expect(response.status).to.equal(200);
                expect(response.body.name).to.equal(params.name);
                expect(response.body.job).to.equal(params.job)
                cy.log("[LOG][SUCESSO]:"+response.body)
            });
        });
    }

}

export default ControllerApis;