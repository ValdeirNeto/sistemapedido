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
    const { Pedido } = request.database;
    const _pedido = await Pedido.findById(request.params.id);
    if (!_pedido) return replay.badRequest('Lista Tarefa nao localizado');
    return _pedido;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function create(request, replay) {
  try {

    const { Pedido } = request.database;
    const credentials = request.auth.credentials;
    const payload = request.payload;

    payload.cliente = credentials.id;

    const _pedido = new Pedido(request.payload);
    const value = await _pedido.save();

    return replay.response(value).code(201);

  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}
async function update(request, replay) {
  try {
    const { Pedido } = request.database;
    const _pedido = await Pedido.findById(request.params.id);
    if (!_pedido) return replay.badRequest('Lista Tarefa nao localizado');
    await _pedido.update(request.payload);
    return _pedido;
  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}

async function remove(request, replay) {
  try {
    const { Pedido } = request.database;
    const _pedido = await Pedido.destroy({ where: { id: request.params.id } });
    if (!_pedido) return replay.badRequest('Lista Tarefa nao localizado');
    return _pedido;
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