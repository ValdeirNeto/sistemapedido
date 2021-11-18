'use strict';

const Joi = require('joi');

const schema = {
  id: Joi.number().integer().min(0),
  pedido: Joi.number().integer().min(0),
  produto: Joi.number().integer().min(0),
  data_cadastro: Joi.date().iso(),
  data_atualizacao: Joi.date().iso()
};

const query = {
  page: Joi.number().integer().min(0),
  limit: Joi.number().integer().min(0)
};

const getSchema = () => ( schema );
const getQuery = () => (query);

module.exports = {
  getSchema,
  getQuery
};