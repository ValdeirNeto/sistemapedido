'use strict';

const Controller = require('./pedidoitem.public.controller');
const Validator = require('./pedidoitem.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/pedidoitem',
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
        path: '/pedidoitem/{pedido}',
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
        path: '/pedidoitem',
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
        path: '/pedidoitem/{pedido}/{id}',
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
        path: '/pedidoitem/{id}',
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
  name: 'pedido-item-public-route',
  version: '1.0.0'
};