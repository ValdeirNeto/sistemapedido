'use strict';



async function list(request, replay) {
  try {
    const { Cliente } = request.database;
    return await Cliente.findAndCountAll();

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function get(request, replay) {
  try {
    const { Cliente } = request.database;
    const _cliente = await Cliente.findById(request.params.id);
    if (!_cliente) return replay.badRequest('Cliente nao localizado');
    return _cliente;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function create(request, replay) {
  try {
    const { Cliente } = request.database;
    const _cliente = new Cliente(request.payload);
    const value = await _cliente.save();

    return replay.response(value).code(201);

  } catch (error) {
    return replay.badImplementationCustom(error);
  }


}

async function update(request, replay) {
  try {
    const { Cliente } = request.database;
    const _cliente = await Cliente.findById(request.params.id);
    if (!_cliente) return replay.badRequest('Cliente nao localizado');
    await _cliente.update(request.payload);
    return _cliente;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}

async function remove(request, replay) {
  try {
    const { Usuario } = request.database;
    const _cliente = await Usuario.destroy({ where: { id: request.params.id } });
    if (!_cliente) return replay.badRequest('Usuario nao localizado');
    return _cliente;
    
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