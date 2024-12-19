//src/models/categorytypes.ts

import { DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize} from 'sequelize';
import type { categorydimension, categorydimensionId } from './categorydimension';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { productlist, productlistId } from './productlist';

export interface categorytypesAttributes {
  id: number;
  type: string;
  name: string;
  displayRate: number;
  primaryDimension?: string;
  imageUrl?: string;
  isDisabled?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type categorytypesPk = 'id';
export type categorytypesId = categorytypes[categorytypesPk];
export type categorytypesOptionalAttributes = 'id' | 'primaryDimension' | 'imageUrl' | 'isDisabled' | 'createdAt' | 'updatedAt';
export type categorytypesCreationAttributes = Optional<categorytypesAttributes, categorytypesOptionalAttributes>;

export class categorytypes extends Model<categorytypesAttributes, categorytypesCreationAttributes> implements categorytypesAttributes {
  id!: number;
  type!: string;
  name!: string;
  displayRate!: number;
  primaryDimension?: string;
  imageUrl?: string;
  isDisabled?: number;
  createdAt!: Date;
  updatedAt!: Date;

  // categorytypes hasMany categorydimension via categoryId
  categorydimensions!: categorydimension[];
  getCategorydimensions!: HasManyGetAssociationsMixin<categorydimension>;
  setCategorydimensions!: HasManySetAssociationsMixin<categorydimension, categorydimensionId>;
  addCategorydimension!: HasManyAddAssociationMixin<categorydimension, categorydimensionId>;
  addCategorydimensions!: HasManyAddAssociationsMixin<categorydimension, categorydimensionId>;
  createCategorydimension!: HasManyCreateAssociationMixin<categorydimension>;
  removeCategorydimension!: HasManyRemoveAssociationMixin<categorydimension, categorydimensionId>;
  removeCategorydimensions!: HasManyRemoveAssociationsMixin<categorydimension, categorydimensionId>;
  hasCategorydimension!: HasManyHasAssociationMixin<categorydimension, categorydimensionId>;
  hasCategorydimensions!: HasManyHasAssociationsMixin<categorydimension, categorydimensionId>;
  countCategorydimensions!: HasManyCountAssociationsMixin;
  // categorytypes hasMany inventorylist via categoryId
  inventorylists!: inventorylist[];
  getInventorylists!: HasManyGetAssociationsMixin<inventorylist>;
  setInventorylists!: HasManySetAssociationsMixin<inventorylist, inventorylistId>;
  addInventorylist!: HasManyAddAssociationMixin<inventorylist, inventorylistId>;
  addInventorylists!: HasManyAddAssociationsMixin<inventorylist, inventorylistId>;
  createInventorylist!: HasManyCreateAssociationMixin<inventorylist>;
  removeInventorylist!: HasManyRemoveAssociationMixin<inventorylist, inventorylistId>;
  removeInventorylists!: HasManyRemoveAssociationsMixin<inventorylist, inventorylistId>;
  hasInventorylist!: HasManyHasAssociationMixin<inventorylist, inventorylistId>;
  hasInventorylists!: HasManyHasAssociationsMixin<inventorylist, inventorylistId>;
  countInventorylists!: HasManyCountAssociationsMixin;
  // categorytypes hasMany productlist via categoryId
  productlists!: productlist[];
  getProductlists!: HasManyGetAssociationsMixin<productlist>;
  setProductlists!: HasManySetAssociationsMixin<productlist, productlistId>;
  addProductlist!: HasManyAddAssociationMixin<productlist, productlistId>;
  addProductlists!: HasManyAddAssociationsMixin<productlist, productlistId>;
  createProductlist!: HasManyCreateAssociationMixin<productlist>;
  removeProductlist!: HasManyRemoveAssociationMixin<productlist, productlistId>;
  removeProductlists!: HasManyRemoveAssociationsMixin<productlist, productlistId>;
  hasProductlist!: HasManyHasAssociationMixin<productlist, productlistId>;
  hasProductlists!: HasManyHasAssociationsMixin<productlist, productlistId>;
  countProductlists!: HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof categorytypes {
    return categorytypes.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING(6),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      displayRate: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      primaryDimension: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      isDisabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'categorytypes',
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
