//src/models/orderitem.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { orderdispatchitem, orderdispatchitemId } from './orderdispatchitem';
import type { orderlist, orderlistId } from './orderlist';
import type { productlist, productlistId } from './productlist';

export interface orderitemAttributes {
  id: number;
  quantity: number;
  quantityUnit: string;
  primaryRate: number;
  cgstPercent: number;
  igstPercent: number;
  sgstPercent: number;
  conversionRatio?: number;
  createdAt: Date;
  updatedAt: Date;
  productId?: number;
  orderId?: number;
}

export type orderitemPk = 'id';
export type orderitemId = orderitem[orderitemPk];
export type orderitemOptionalAttributes = 'id' | 'conversionRatio' | 'createdAt' | 'updatedAt' | 'productId' | 'orderId';
export type orderitemCreationAttributes = Optional<orderitemAttributes, orderitemOptionalAttributes>;

export class orderitem extends Model<orderitemAttributes, orderitemCreationAttributes> implements orderitemAttributes {
  id!: number;
  quantity!: number;
  quantityUnit!: string;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio?: number;
  createdAt!: Date;
  updatedAt!: Date;
  productId?: number;
  orderId?: number;

  // orderitem hasMany orderdispatchitem via orderItemId
  orderdispatchitems!: orderdispatchitem[];
  getOrderdispatchitems!: HasManyGetAssociationsMixin<orderdispatchitem>;
  setOrderdispatchitems!: HasManySetAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  addOrderdispatchitem!: HasManyAddAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  addOrderdispatchitems!: HasManyAddAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  createOrderdispatchitem!: HasManyCreateAssociationMixin<orderdispatchitem>;
  removeOrderdispatchitem!: HasManyRemoveAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  removeOrderdispatchitems!: HasManyRemoveAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  hasOrderdispatchitem!: HasManyHasAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  hasOrderdispatchitems!: HasManyHasAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  countOrderdispatchitems!: HasManyCountAssociationsMixin;
  // orderitem belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;
  // orderitem belongsTo productlist via productId
  product!: productlist;
  getProduct!: BelongsToGetAssociationMixin<productlist>;
  setProduct!: BelongsToSetAssociationMixin<productlist, productlistId>;
  createProduct!: BelongsToCreateAssociationMixin<productlist>;

  static initModel(sequelize: Sequelize): typeof orderitem {
    return orderitem.init({
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
      quantityUnit: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      primaryRate: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cgstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      igstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      sgstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      conversionRatio: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productlist',
          key: 'id'
        }
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
      tableName: 'orderitem',
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
          name: 'productId',
          using: 'BTREE',
          fields: [
            { name: 'productId' },
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
