//src/models/orderdeliverydetail.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderdispatchdetail, orderdispatchdetailId } from './orderdispatchdetail';

export interface orderdeliverydetailAttributes {
  id: number;
  deliveredTo?: string;
  deliveredBy?: string;
  mobileNumber?: string;
  comments?: string;
  createdAt: Date;
  updatedAt: Date;
  orderDispatchId?: number;
}

export type orderdeliverydetailPk = 'id';
export type orderdeliverydetailId = orderdeliverydetail[orderdeliverydetailPk];
export type orderdeliverydetailOptionalAttributes = 'id' | 'deliveredTo' | 'deliveredBy' | 'mobileNumber' | 'comments' | 'createdAt' | 'updatedAt' | 'orderDispatchId';
export type orderdeliverydetailCreationAttributes = Optional<orderdeliverydetailAttributes, orderdeliverydetailOptionalAttributes>;

export class orderdeliverydetail extends Model<orderdeliverydetailAttributes, orderdeliverydetailCreationAttributes> implements orderdeliverydetailAttributes {
  id!: number;
  deliveredTo?: string;
  deliveredBy?: string;
  mobileNumber?: string;
  comments?: string;
  createdAt!: Date;
  updatedAt!: Date;
  orderDispatchId?: number;

  // orderdeliverydetail belongsTo orderdispatchdetail via orderDispatchId
  orderDispatch!: orderdispatchdetail;
  getOrderDispatch!: BelongsToGetAssociationMixin<orderdispatchdetail>;
  setOrderDispatch!: BelongsToSetAssociationMixin<orderdispatchdetail, orderdispatchdetailId>;
  createOrderDispatch!: BelongsToCreateAssociationMixin<orderdispatchdetail>;

  static initModel(sequelize: Sequelize): typeof orderdeliverydetail {
    return orderdeliverydetail.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      deliveredTo: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      deliveredBy: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      mobileNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      comments: {
        type: DataTypes.STRING(255),
        allowNull: true
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
      tableName: 'orderdeliverydetail',
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
