//src/models/categorydimension.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize} from 'sequelize';
import type { categorytypes, categorytypesId } from './categorytypes';
import type { productdimensions, productdimensionsId } from './productdimensions';

export interface categorydimensionAttributes {
  id: number;
  dimensionId: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId?: number;
}

export type categorydimensionPk = 'id';
export type categorydimensionId = categorydimension[categorydimensionPk];
export type categorydimensionOptionalAttributes = 'id' | 'createdAt' | 'updatedAt' | 'categoryId';
export type categorydimensionCreationAttributes = Optional<categorydimensionAttributes, categorydimensionOptionalAttributes>;

export class categorydimension extends Model<categorydimensionAttributes, categorydimensionCreationAttributes> implements categorydimensionAttributes {
  id!: number;
  dimensionId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId?: number;

  // categorydimension hasMany productdimensions via productDimensionId
  productdimensions!: productdimensions[];
  getProductdimensions!: HasManyGetAssociationsMixin<productdimensions>;
  setProductdimensions!: HasManySetAssociationsMixin<productdimensions, productdimensionsId>;
  addProductdimension!: HasManyAddAssociationMixin<productdimensions, productdimensionsId>;
  addProductdimensions!: HasManyAddAssociationsMixin<productdimensions, productdimensionsId>;
  createProductdimension!: HasManyCreateAssociationMixin<productdimensions>;
  removeProductdimension!: HasManyRemoveAssociationMixin<productdimensions, productdimensionsId>;
  removeProductdimensions!: HasManyRemoveAssociationsMixin<productdimensions, productdimensionsId>;
  hasProductdimension!: HasManyHasAssociationMixin<productdimensions, productdimensionsId>;
  hasProductdimensions!: HasManyHasAssociationsMixin<productdimensions, productdimensionsId>;
  countProductdimensions!: HasManyCountAssociationsMixin;
  // categorydimension belongsTo categorytypes via categoryId
  category!: categorytypes;
  getCategory!: BelongsToGetAssociationMixin<categorytypes>;
  setCategory!: BelongsToSetAssociationMixin<categorytypes, categorytypesId>;
  createCategory!: BelongsToCreateAssociationMixin<categorytypes>;

  static initModel(sequelize: Sequelize): typeof categorydimension {
    return categorydimension.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      dimensionId: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'categorytypes',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'categorydimension',
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
          name: 'categoryId',
          using: 'BTREE',
          fields: [
            { name: 'categoryId' },
          ]
        },
      ]
    });
  }
}
