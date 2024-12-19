//src/models/razorpayorder.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderlist, orderlistId } from './orderlist';

export interface razorpayorderAttributes {
  id: number;
  amount: number;
  currency: string;
  razorpayOrderId?: string;
  extraInfo?: string;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
}

export type razorpayorderPk = 'id';
export type razorpayorderId = razorpayorder[razorpayorderPk];
export type razorpayorderOptionalAttributes = 'id' | 'currency' | 'razorpayOrderId' | 'extraInfo' | 'createdAt' | 'updatedAt' | 'orderId';
export type razorpayorderCreationAttributes = Optional<razorpayorderAttributes, razorpayorderOptionalAttributes>;

export class razorpayorder extends Model<razorpayorderAttributes, razorpayorderCreationAttributes> implements razorpayorderAttributes {
  id!: number;
  amount!: number;
  currency!: string;
  razorpayOrderId?: string;
  extraInfo?: string;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;

  // razorpayorder belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof razorpayorder {
    return razorpayorder.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING(4),
        allowNull: false,
        defaultValue: 'INR'
      },
      razorpayOrderId: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      extraInfo: {
        type: DataTypes.STRING(255),
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
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'razorpayorder',
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
