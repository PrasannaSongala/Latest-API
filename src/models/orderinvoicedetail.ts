//src/models/orderinvoicedetail.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderlist, orderlistId } from './orderlist';

export interface orderinvoicedetailAttributes {
  invoiceId: number;
  ewayBillNumber?: string;
  invoiceSent?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  doNumber?: string;
}

export type orderinvoicedetailPk = 'invoiceId';
export type orderinvoicedetailId = orderinvoicedetail[orderinvoicedetailPk];
export type orderinvoicedetailOptionalAttributes = 'invoiceId' | 'ewayBillNumber' | 'invoiceSent' | 'createdAt' | 'updatedAt' | 'orderId' | 'doNumber';
export type orderinvoicedetailCreationAttributes = Optional<orderinvoicedetailAttributes, orderinvoicedetailOptionalAttributes>;

export class orderinvoicedetail extends Model<orderinvoicedetailAttributes, orderinvoicedetailCreationAttributes> implements orderinvoicedetailAttributes {
  invoiceId!: number;
  ewayBillNumber?: string;
  invoiceSent?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;
  doNumber?: string;

  // orderinvoicedetail belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof orderinvoicedetail {
    return orderinvoicedetail.init({
      invoiceId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ewayBillNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      invoiceSent: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orderlist',
          key: 'id'
        }
      },
      doNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'orderinvoicedetail',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'invoiceId' },
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
