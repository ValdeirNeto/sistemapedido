'use strict';


const jwt = require('jsonwebtoken');

const generateToken = (cliente, expiresIn) => ({
  access_token: jwt.sign({
    id: cliente.id,
    email: cliente.email,
    scope: ['public', 'admin']
  }, 'token', { expiresIn: expiresIn }),
  email: cliente.email
});

const setRedis = (client, key, value, expiresIn) => {
  client.set(key, JSON.stringify(value));
  client.expire(key, (60 * 60) * expiresIn);
};

const auth = async (request, replay) => {
  try {
    const { Cliente } = request.database;
    const payload = request.payload;

    const _cliente = await Cliente.findOne({
      where: {
        email: payload.email
      }
    });

    if (!_cliente) return replay.unauthorized();
    if (!_cliente.checarSenha(payload.senha)) return replay.unauthorized();
    
    const auth =  generateToken(_cliente, '1H');

    return auth;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

};

module.exports = {
  auth
};