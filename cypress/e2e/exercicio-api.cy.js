/// <reference types="cypress" />

describe('Funcionalidade: Usuários', () => {
  let usuarioId;

  beforeEach(() => {
    cy.request('GET', '/usuarios').then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Deve listar usuários cadastrados', () => {
    cy.request('GET', '/usuarios').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
      expect(response.body.usuarios).to.be.an('array');
    });
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    const novoUsuario = {
      nome: 'Teste Cypress',
      email: `testecypress04@gmail.com`,
      password: 'teste123',
      administrador: 'true'
    };

    cy.request('POST', '/usuarios', novoUsuario).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Cadastro realizado com sucesso');
      usuarioId = response.body._id;
    });
  });

  it('Deve validar um usuário com email inválido', () => {
    const usuarioInvalido = {
      nome: 'Teste Inválido',
      email: 'emailinvalido',
      password: '123456',
      administrador: 'false'
    };

    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: usuarioInvalido,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal('email deve ser um email válido');
    });
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    const usuarioOriginal = {
      nome: 'Usuário Original',
      email: `testecypress05@gmail.com`,
      password: '123456',
      administrador: 'false'
    };

    cy.request('POST', '/usuarios', usuarioOriginal).then((res) => {
      const id = res.body._id;

      const usuarioEditado = {
        nome: 'Usuário Editado',
        email: `testecypress06@gmail.com`,
        password: '654321',
        administrador: 'true'
      };

      cy.request('PUT', `/usuarios/${id}`, usuarioEditado).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro alterado com sucesso');
      });
    });
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    const usuarioParaDeletar = {
      nome: 'Usuário Deletável',
      email: `testecypress007@gmail.com`,
      password: '000000',
      administrador: 'false'
    };

    cy.request('POST', '/usuarios', usuarioParaDeletar).then((res) => {
      const id = res.body._id;

      cy.request('DELETE', `/usuarios/${id}`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro excluído com sucesso');
      });
    });
  });
});

