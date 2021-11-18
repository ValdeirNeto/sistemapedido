'use strict';

const Joi = require('joi');
const Schema = require('../pedidoitem.schema');

const schema = Schema.getSchema();

const create = () => ({
  payload: Joi.object({
    pedido: schema.pedido.optional(),
    produto: schema.produto.optional(),
  }).label('CadastroListaTarefas')
});

const update = () => ({
  params: {
    id: schema.id.required()
  },
  payload: Joi.object({
    produto: schema.produto.optional(),
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