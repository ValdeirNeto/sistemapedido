'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    cliente: {
      type: DataTypes.BIGINT,
      field: 'cliente_id',
      allowNull: true
    },
  },{
    tableName: 'Pedidos',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',

    scopes: {
      cliente: function (clienteId) {
        return {
          where: {
            cliente: clienteId
          }
        };
      }
    }
  });

  Pedidos.associate = function (models) {
    models.Cliente.hasMany(models.Pedidos, { foreignKey: 'cliente_id', as: 'Pedidos' });
    models.Pedidos.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'Clientes' });
  };

  return Pedidos;
};