'use strict';

async function list(request, replay) {
  try {
    const { Pedido, Cliente } = request.database;

    const value = await Pedido.findAll({
      offset: request.offset(),
      limit: request.limit(),
      include: [{
        model: Cliente,
        as: 'Clientes',
      }]
    });

    return value;
  } catch (err) {
    return replay.badImplementationCustom(err);
  }

}

async function get(request, replay) {
  try {
    const { Pedidoitem } = request.database;
    const _pedidoitem = await Pedidoitem.findByPedido(request.params.id);
    if (!_pedidoitem) return replay.badRequest('Lista Tarefa nao localizado');
    return _pedidoitem;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function create(request, replay) {
  try {

    const { Pedidoitem } = request.database;
    const credentials = request.auth.credentials;

    const _pedidoitem = new Pedidoitem(request.payload);
    const value = await _pedidoitem.save();

    return replay.response(value).code(201);

  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}
async function update(request, replay) {
  try {
    const { Pedidoitem } = request.database;
    const _pedidoitem = await Pedidoitem.findById(request.params.id);
    if (!_pedidoitem) return replay.badRequest('Lista Tarefa nao localizado');
    await _pedidoitem.update(request.payload);
    return _pedidoitem;
  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}

async function remove(request, replay) {
  try {
    const { Pedidoitem } = request.database;
    const _pedidoitem = await Pedidoitem.destroy({ where: { id: request.params.id } });
    if (!_pedidoitem) return replay.badRequest('Lista Tarefa nao localizado');
    return _pedidoitem;
  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

module.exports = {
  list,
  get,
  create,
  update,
  remove
};