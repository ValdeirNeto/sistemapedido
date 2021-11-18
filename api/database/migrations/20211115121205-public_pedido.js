'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      codigo: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      data: Sequelize.STRING,
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      cliente: {
        type: Sequelize.BIGINT,
        field: 'cliente_id',
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
    return await queryInterface.addConstraint('Pedidos', ['cliente_id'], {
      type: 'Foreign Key',
      name: 'FK_PEDIDO_CLIENTES_ID001',
      references: {
        table: 'clientes',
        field: 'id'
      }
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Pedidos', 'FK_PEDIDO_CLIENTES_ID001');
    return queryInterface.dropTable('Pedidos');
  }
};
