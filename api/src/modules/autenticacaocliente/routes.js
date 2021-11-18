'use strict';

const Controller = require('./controller');
const Validator = require('./validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'POST',
        path: '/authcliente',
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
  name: 'autenticacao-cliente-public-route',
  version: '1.0.0'
};