//src/models/orderinventorydetail.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { orderlist, orderlistId } from './orderlist';

export interface orderinventorydetailAttributes {
  id: number;
  inventoryUsed?: number;
  inventoryWasted?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  inventoryId?: number;
}

export type orderinventorydetailPk = 'id';
export type orderinventorydetailId = orderinventorydetail[orderinventorydetailPk];
export type orderinventorydetailOptionalAttributes = 'id' | 'inventoryUsed' | 'inventoryWasted' | 'createdAt' | 'updatedAt' | 'orderId' | 'inventoryId';
export type orderinventorydetailCreationAttributes = Optional<orderinventorydetailAttributes, orderinventorydetailOptionalAttributes>;

export class orderinventorydetail extends Model<orderinventorydetailAttributes, orderinventorydetailCreationAttributes> implements orderinventorydetailAttributes {
  id!: number;
  inventoryUsed?: number;
  inventoryWasted?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;
  inventoryId?: number;

  // orderinventorydetail belongsTo inventorylist via inventoryId
  inventory!: inventorylist;
  getInventory!: BelongsToGetAssociationMixin<inventorylist>;
  setInventory!: BelongsToSetAssociationMixin<inventorylist, inventorylistId>;
  createInventory!: BelongsToCreateAssociationMixin<inventorylist>;
  // orderinventorydetail belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof orderinventorydetail {
    return orderinventorydetail.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      inventoryUsed: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      inventoryWasted: {
        type: DataTypes.FLOAT,
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
      inventoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'inventorylist',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'orderinventorydetail',
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
        {
          name: 'inventoryId',
          using: 'BTREE',
          fields: [
            { name: 'inventoryId' },
          ]
        },
      ]
    });
  }
}
