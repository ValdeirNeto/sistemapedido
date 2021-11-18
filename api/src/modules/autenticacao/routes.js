'use strict';

const Controller = require('./controller');
const Validator = require('./validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'POST',
        path: '/auth',
        config: {
          auth: {
                scope:['admin']
          },
          handler: Controller.auth,
          validate: Validator.auth()
        },
      },
    ]
    );
  },
  name: 'autenticacao-public-route',
  version: '1.0.0'
};