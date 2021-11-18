'use strict';

const Joi = require('joi');

const schema = {
  id: Joi.number().integer().min(0),
  descricao: Joi.string().trim(),
  preco: Joi.string().email().min(0).max(255),
  multiplo: Joi.string().trim(),
  data_cadastro: Joi.date().iso(),
  data_atualizacao: Joi.date().iso()
};

const getSchema = () => ( schema );

module.exports = {
  getSchema
};