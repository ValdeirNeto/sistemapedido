'use strict';

const Controller = require('./cliente.public.controller');
const Validator = require('./cliente.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/cliente',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o Usuario',
          notes: 'retorna a lista de usuario',
          tags: ['api'],
          handler: Controller.list
        },
      },
      {
        method: 'GET',
        path: '/cliente/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o Usuario',
          notes: 'retorna a lista de usuario',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      },
      {
        method: 'POST',
        path: '/cliente',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Criando o Usuario',
          notes: 'Criando o usuario',
          tags: ['api'],
          handler: Controller.create,
          validate: Validator.create()
        }
      },
      {
        method: ['PUT', 'PATCH'],
        path: '/cliente/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Atualiza o Usuario',
          notes: 'Atualiza o usuario',
          tags: ['api'],
          handler: Controller.update,
          validate: Validator.update()
        }
      },
      {
        method: 'DELETE',
        path: '/cliente/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Deletando o Usuario',
          notes: 'deletendo de usuario',
          tags: ['api'],
          handler: Controller.remove,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'cliente-admin-route',
  version: '1.0.0'
};