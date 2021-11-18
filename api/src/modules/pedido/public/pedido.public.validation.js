'use strict';

const Joi = require('joi');
const Schema = require('../pedido.schema');

const schema = Schema.getSchema();

const create = () => ({
  payload: Joi.object({
    codigo: schema.codigo.optional(),
    data: schema.data.optional(),
    status: schema.status.optional(),
    usuario: schema.usuario.optional()
  }).label('CadastroListaTarefas')
});

const update = () => ({
  params: {
    id: schema.id.required()
  },
  payload: Joi.object({
    data: schema.data.optional(),
    usuario: schema.usuario.optional()
  }).label('UpdateListaTarefas')
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