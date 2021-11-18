'use strict';

const Controller = require('./pedido.public.controller');
const Validator = require('./pedido.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/pedido',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o pedido',
          notes: 'retorna a lista de pedido',
          tags: ['api'],
          handler: Controller.list
        },
      },
      {
        method: 'GET',
        path: '/pedido/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Listando o pedido',
          notes: 'retorna a lista de pedido',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      },
      {
        method: 'POST',
        path: '/pedido',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Criando o pedido',
          notes: 'Criando o pedido',
          tags: ['api'],
          handler: Controller.create,
          validate: Validator.create()
        }
      },
      {
        method: ['PUT', 'PATCH'],
        path: '/pedido/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Atualiza o pedido',
          notes: 'Atualiza o pedido',
          tags: ['api'],
          handler: Controller.update,
          validate: Validator.update()
        }
      },
      {
        method: 'DELETE',
        path: '/pedido/{id}',
        config: {
          auth: {
      scope:['admin']
},
          description: 'Deletando o pedido',
          notes: 'deletendo de pedido',
          tags: ['api'],
          handler: Controller.remove,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'pedido-public-route',
  version: '1.0.0'
};