'use strict';



async function list(request, replay) {
  try {
    const { Produto } = request.database;
    return await Produto.findAndCountAll();

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function get(request, replay) {
  try {
    const { Produto } = request.database;
    const _produto = await Produto.findById(request.params.id);
    if (!_produto) return replay.badRequest('Produto nao localizado');
    return _produto;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }

}

async function create(request, replay) {
  try {
    const { Produto } = request.database;
    const _produto = new Produto(request.payload);
    const value = await _produto.save();

    return replay.response(value).code(201);

  } catch (error) {
    return replay.badImplementationCustom(error);
  }


}

async function update(request, replay) {
  try {
    const { Produto } = request.database;
    const _produto = await Produto.findById(request.params.id);
    if (!_produto) return replay.badRequest('Produto nao localizado');
    await _produto.update(request.payload);
    return _produto;

  } catch (error) {
    return replay.badImplementationCustom(error);
  }
}

async function remove(request, replay) {
  try {
    const { Produto } = request.database;
    const _produto = await Produto.destroy({ where: { id: request.params.id } });
    if (!_produto) return replay.badRequest('Produto nao localizado');
    return _produto;
    
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