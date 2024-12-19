//src/models/productdimensions.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { categorydimension, categorydimensionId } from './categorydimension';
import type { productlist, productlistId } from './productlist';

export interface productdimensionsAttributes {
  id: number;
  value: string;
  createdAt: Date;
  updatedAt: Date;
  productDimensionId?: number;
  productId?: number;
}

export type productdimensionsPk = 'id';
export type productdimensionsId = productdimensions[productdimensionsPk];
export type productdimensionsOptionalAttributes = 'id' | 'createdAt' | 'updatedAt' | 'productDimensionId' | 'productId';
export type productdimensionsCreationAttributes = Optional<productdimensionsAttributes, productdimensionsOptionalAttributes>;

export class productdimensions extends Model<productdimensionsAttributes, productdimensionsCreationAttributes> implements productdimensionsAttributes {
  id!: number;
  value!: string;
  createdAt!: Date;
  updatedAt!: Date;
  productDimensionId?: number;
  productId?: number;

  // productdimensions belongsTo categorydimension via productDimensionId
  productDimension!: categorydimension;
  getProductDimension!: BelongsToGetAssociationMixin<categorydimension>;
  setProductDimension!: BelongsToSetAssociationMixin<categorydimension, categorydimensionId>;
  createProductDimension!: BelongsToCreateAssociationMixin<categorydimension>;
  // productdimensions belongsTo productlist via productId
  product!: productlist;
  getProduct!: BelongsToGetAssociationMixin<productlist>;
  setProduct!: BelongsToSetAssociationMixin<productlist, productlistId>;
  createProduct!: BelongsToCreateAssociationMixin<productlist>;

  static initModel(sequelize: Sequelize): typeof productdimensions {
    return productdimensions.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      value: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      productDimensionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'categorydimension',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productlist',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'productdimensions',
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
          name: 'productDimensionId',
          using: 'BTREE',
          fields: [
            { name: 'productDimensionId' },
          ]
        },
        {
          name: 'productId',
          using: 'BTREE',
          fields: [
            { name: 'productId' },
          ]
        },
      ]
    });
  }
}
