//src/models/paymenttransactions.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderlist, orderlistId } from './orderlist';

export interface paymenttransactionsAttributes {
  id: number;
  amount?: number;
  paymentDate?: Date;
  updatedBy?: string;
  paymentMode?: string;
  transactionCredit?: number;
  transactionNumber?: string;
  isDeleted?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
}

export type paymenttransactionsPk = 'id';
export type paymenttransactionsId = paymenttransactions[paymenttransactionsPk];
export type paymenttransactionsOptionalAttributes = 'id' | 'amount' | 'paymentDate' | 'updatedBy' | 'paymentMode' | 'transactionCredit' | 'transactionNumber' | 'isDeleted' | 'createdAt' | 'updatedAt' | 'orderId';
export type paymenttransactionsCreationAttributes = Optional<paymenttransactionsAttributes, paymenttransactionsOptionalAttributes>;

export class paymenttransactions extends Model<paymenttransactionsAttributes, paymenttransactionsCreationAttributes> implements paymenttransactionsAttributes {
  id!: number;
  amount?: number;
  paymentDate?: Date;
  updatedBy?: string;
  paymentMode?: string;
  transactionCredit?: number;
  transactionNumber?: string;
  isDeleted?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;

  // paymenttransactions belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof paymenttransactions {
    return paymenttransactions.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedBy: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      paymentMode: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      transactionCredit: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      transactionNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orderlist',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'paymenttransactions',
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
        {
          name: 'orderId',
          using: 'BTREE',
          fields: [
            { name: 'orderId' },
          ]
        },
      ]
    });
  }
}
