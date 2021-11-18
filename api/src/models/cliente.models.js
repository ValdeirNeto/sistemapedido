'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
        this.salt = bcrypt.genSaltSync(12);
        this.setDataValue('senha', val);
        this.setDataValue('senha_hash', this.criptografarSenha(val));
      }
    },
    senha_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.VIRTUAL
    }
  },{
    tableName: 'clientes',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',
  });

  Cliente.prototype.checarSenha = function (senha) {
    //return (this.criptografarSenha(senha) === this.senha_hash);
    return bcrypt.compareSync(senha, this.senha_hash);
  };

  Cliente.prototype.criptografarSenha = function (senha) {
    return bcrypt.hashSync(senha, this.salt);
  };

  return Cliente;
};