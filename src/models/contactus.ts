//src/models/contactus.ts

import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface contactusAttributes {
  id: number;
  name?: string;
  email?: string;
  message?: string;
  status?: string;
  note?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type contactusPk = 'id';
export type contactusId = contactus[contactusPk];
export type contactusOptionalAttributes = 'id' | 'name' | 'email' | 'message' | 'status' | 'note' | 'createdAt' | 'updatedAt';
export type contactusCreationAttributes = Optional<contactusAttributes, contactusOptionalAttributes>;

export class contactus extends Model<contactusAttributes, contactusCreationAttributes> implements contactusAttributes {
  id!: number;
  name?: string;
  email?: string;
  message?: string;
  status?: string;
  note?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize): typeof contactus {
    return contactus.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      note: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'contactus',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' },
          ]
        },
      ]
    });
  }
}
