//src/models/userregistration.ts

import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface userregistrationAttributes {
  id: number;
  mobileNumber?: string;
  otp?: number;
  numberOfOtpSent?: number;
  numberOfOtpTried?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type userregistrationPk = 'id';
export type userregistrationId = userregistration[userregistrationPk];
export type userregistrationOptionalAttributes = 'id' | 'mobileNumber' | 'otp' | 'numberOfOtpSent' | 'numberOfOtpTried' | 'createdAt' | 'updatedAt';
export type userregistrationCreationAttributes = Optional<userregistrationAttributes, userregistrationOptionalAttributes>;

export class userregistration extends Model<userregistrationAttributes, userregistrationCreationAttributes> implements userregistrationAttributes {
  id!: number;
  mobileNumber?: string;
  otp?: number;
  numberOfOtpSent?: number;
  numberOfOtpTried?: number;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize): typeof userregistration {
    return userregistration.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      mobileNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      otp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      numberOfOtpSent: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      numberOfOtpTried: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'userregistration',
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
