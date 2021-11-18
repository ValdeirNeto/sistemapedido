'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    descricao: DataTypes.STRING,
    preco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    multiplo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'produtos',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',
  });

  return Produto;
};