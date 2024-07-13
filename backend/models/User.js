'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users', // Tentukan nama tabel di sini jika berbeda dari nama model
    timestamps: true, // Menambahkan createdAt dan updatedAt timestamps
  });

  // Definisikan asosiasi di sini
  User.associate = function(models) {
    // asosiasi dapat didefinisikan di sini
  };

  return User;
};
