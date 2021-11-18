'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PedidosItens', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      produto: {
        type: Sequelize.BIGINT,
        field: 'produto_id',
        allowNull: true
      },
      pedido: {
        type: Sequelize.BIGINT,
        field: 'pedido_id',
        allowNull: true
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: null
      },
      data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: null,
      }
    });
    await queryInterface.addConstraint('PedidosItens', ['produto_id'], {
      type: 'Foreign Key',
      name: 'FK_PEDIDO_PRODUTO_ID001',
      references: {
        table: 'produtos',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('PedidosItens', ['pedido_id'], {
      type: 'Foreign Key',
      name: 'FK_PEDIDO_ITEM_PEDIDO_ID002',
      references: {
        table: 'pedidos',
        field: 'id'
      }
    });

    return 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('PedidosItens', 'FK_PEDIDO_ITEM_PEDIDO_ID002');
    await queryInterface.removeConstraint('PedidosItens', 'FK_PEDIDO_PRODUTO_ID001');
    return queryInterface.dropTable('PedidosItens');

  }
};
