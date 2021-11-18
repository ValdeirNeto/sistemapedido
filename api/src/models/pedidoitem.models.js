'use strict';

module.exports = (sequelize, DataTypes) => {
  const PedidosItens = sequelize.define('PedidosItens', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    produto: {
      type: DataTypes.BIGINT,
      field: 'produto_id',
      allowNull: true
    },
    pedido: {
      type: DataTypes.BIGINT,
      field: 'pedido_id',
      allowNull: true
    },
  },{
    tableName: 'PedidosItens',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',

    scopes: {
      produto: function (produtoId) {
        return {
          where: {
            produto: produtoId
          }
        };
      },
      pedido: function (pedidoId) {
        return {
          where: {
            pedido: pedidoId
          }
        };
      }
    }
  });

  PedidosItens.associate = function (models) {
    models.Produto.hasMany(models.PedidosItens, { foreignKey: 'produto_id', as: 'PedidosItens' });
    models.PedidosItens.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'Produtos' });

    models.Pedido.hasMany(models.PedidosItens, { foreignKey: 'pedido_id', as: 'PedidosItens' });
    models.PedidosItens.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'Pedidos' });

  };

  PedidosItens.associate = function (models) {
  };

  return PedidosItens;
};