'use strict';

const Joi = require('joi');
const Schema = require('../produto.schema');

const schema = Schema.getSchema();

const create = () => ({
  payload: Joi.object({
    descricao: schema.descricao.required(),
    preco: schema.preco.required(),
    multiplo: schema.multiplo.required(),
  }).label('CadastroUsuario')
});

const update = () => ({
  params: {
    id: schema.id.required()
  },
  payload: Joi.object({
    descricao: schema.descricao.optional(),
    preco: schema.preco.required(),
    multiplo: schema.multiplo.optional()
  }).label('UpdateUsuario')
});

const get = () => ({
  params: {
    id: schema.id.required()
  }
});
module.exports = {
  create,
  update,
  get
};