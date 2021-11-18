'use strict';

const Controller = require('./produto.public.controller');
const Validator = require('./produto.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/produto',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o produto',
          notes: 'retorna a lista de produto',
          tags: ['api'],
          handler: Controller.list
        },
      },
      {
        method: 'GET',
        path: '/produto/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o produto',
          notes: 'retorna a lista de produto',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      },
      {
        method: 'POST',
        path: '/produto',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Criando o produto',
          notes: 'Criando o produto',
          tags: ['api'],
          handler: Controller.create,
          validate: Validator.create()
        }
      },
      {
        method: ['PUT', 'PATCH'],
        path: '/produto/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Atualiza o produto',
          notes: 'Atualiza o produto',
          tags: ['api'],
          handler: Controller.update,
          validate: Validator.update()
        }
      },
      {
        method: 'DELETE',
        path: '/produto/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Deletando o produto',
          notes: 'deletendo de produto',
          tags: ['api'],
          handler: Controller.remove,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'produto-admin-route',
  version: '1.0.0'
};