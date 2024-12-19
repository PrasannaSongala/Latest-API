//src/models/orderdispatchitem.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderdispatchdetail, orderdispatchdetailId } from './orderdispatchdetail';
import type { orderitem, orderitemId } from './orderitem';

export interface orderdispatchitemAttributes {
  id: number;
  quantity: number;
  quantityWasted?: number;
  createdAt: Date;
  updatedAt: Date;
  orderItemId?: number;
  orderDispatchId?: number;
}

export type orderdispatchitemPk = 'id';
export type orderdispatchitemId = orderdispatchitem[orderdispatchitemPk];
export type orderdispatchitemOptionalAttributes = 'id' | 'quantityWasted' | 'createdAt' | 'updatedAt' | 'orderItemId' | 'orderDispatchId';
export type orderdispatchitemCreationAttributes = Optional<orderdispatchitemAttributes, orderdispatchitemOptionalAttributes>;

export class orderdispatchitem extends Model<orderdispatchitemAttributes, orderdispatchitemCreationAttributes> implements orderdispatchitemAttributes {
  id!: number;
  quantity!: number;
  quantityWasted?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderItemId?: number;
  orderDispatchId?: number;

  // orderdispatchitem belongsTo orderdispatchdetail via orderDispatchId
  orderDispatch!: orderdispatchdetail;
  getOrderDispatch!: BelongsToGetAssociationMixin<orderdispatchdetail>;
  setOrderDispatch!: BelongsToSetAssociationMixin<orderdispatchdetail, orderdispatchdetailId>;
  createOrderDispatch!: BelongsToCreateAssociationMixin<orderdispatchdetail>;
  // orderdispatchitem belongsTo orderitem via orderItemId
  orderItem!: orderitem;
  getOrderItem!: BelongsToGetAssociationMixin<orderitem>;
  setOrderItem!: BelongsToSetAssociationMixin<orderitem, orderitemId>;
  createOrderItem!: BelongsToCreateAssociationMixin<orderitem>;

  static initModel(sequelize: Sequelize): typeof orderdispatchitem {
    return orderdispatchitem.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      quantityWasted: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      orderItemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orderitem',
          key: 'id'
        }
      },
      orderDispatchId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orderdispatchdetail',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'orderdispatchitem',
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
          name: 'orderItemId',
          using: 'BTREE',
          fields: [
            { name: 'orderItemId' },
          ]
        },
        {
          name: 'orderDispatchId',
          using: 'BTREE',
          fields: [
            { name: 'orderDispatchId' },
          ]
        },
      ]
    });
  }
}
