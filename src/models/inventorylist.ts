//src/models/inventorylist.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { brandlist, brandlistId } from './brandlist';
import type { categorytypes, categorytypesId } from './categorytypes';
import type { inventorytransaction, inventorytransactionId } from './inventorytransaction';
import type { locations, locationsId } from './locations';
import type { orderinventorydetail, orderinventorydetailId } from './orderinventorydetail';
import type { productlist, productlistId } from './productlist';

export interface inventorylistAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  brandId?: number;
  categoryId?: number;
  locationId?: number;
}

export type inventorylistPk = 'id';
export type inventorylistId = inventorylist[inventorylistPk];
export type inventorylistOptionalAttributes = 'id' | 'createdAt' | 'updatedAt' | 'brandId' | 'categoryId' | 'locationId';
export type inventorylistCreationAttributes = Optional<inventorylistAttributes, inventorylistOptionalAttributes>;

export class inventorylist extends Model<inventorylistAttributes, inventorylistCreationAttributes> implements inventorylistAttributes {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  brandId?: number;
  categoryId?: number;
  locationId?: number;

  // inventorylist belongsTo brandlist via brandId
  brand!: brandlist;
  getBrand!: BelongsToGetAssociationMixin<brandlist>;
  setBrand!: BelongsToSetAssociationMixin<brandlist, brandlistId>;
  createBrand!: BelongsToCreateAssociationMixin<brandlist>;
  // inventorylist belongsTo categorytypes via categoryId
  category!: categorytypes;
  getCategory!: BelongsToGetAssociationMixin<categorytypes>;
  setCategory!: BelongsToSetAssociationMixin<categorytypes, categorytypesId>;
  createCategory!: BelongsToCreateAssociationMixin<categorytypes>;
  // inventorylist hasMany inventorytransaction via inventoryId
  inventorytransactions!: inventorytransaction[];
  getInventorytransactions!: HasManyGetAssociationsMixin<inventorytransaction>;
  setInventorytransactions!: HasManySetAssociationsMixin<inventorytransaction, inventorytransactionId>;
  addInventorytransaction!: HasManyAddAssociationMixin<inventorytransaction, inventorytransactionId>;
  addInventorytransactions!: HasManyAddAssociationsMixin<inventorytransaction, inventorytransactionId>;
  createInventorytransaction!: HasManyCreateAssociationMixin<inventorytransaction>;
  removeInventorytransaction!: HasManyRemoveAssociationMixin<inventorytransaction, inventorytransactionId>;
  removeInventorytransactions!: HasManyRemoveAssociationsMixin<inventorytransaction, inventorytransactionId>;
  hasInventorytransaction!: HasManyHasAssociationMixin<inventorytransaction, inventorytransactionId>;
  hasInventorytransactions!: HasManyHasAssociationsMixin<inventorytransaction, inventorytransactionId>;
  countInventorytransactions!: HasManyCountAssociationsMixin;
  // inventorylist hasMany orderinventorydetail via inventoryId
  orderinventorydetails!: orderinventorydetail[];
  getOrderinventorydetails!: HasManyGetAssociationsMixin<orderinventorydetail>;
  setOrderinventorydetails!: HasManySetAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  addOrderinventorydetail!: HasManyAddAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  addOrderinventorydetails!: HasManyAddAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  createOrderinventorydetail!: HasManyCreateAssociationMixin<orderinventorydetail>;
  removeOrderinventorydetail!: HasManyRemoveAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  removeOrderinventorydetails!: HasManyRemoveAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  hasOrderinventorydetail!: HasManyHasAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  hasOrderinventorydetails!: HasManyHasAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  countOrderinventorydetails!: HasManyCountAssociationsMixin;
  // inventorylist hasMany productlist via inventoryId
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
  // inventorylist belongsTo locations via locationId
  location!: locations;
  getLocation!: BelongsToGetAssociationMixin<locations>;
  setLocation!: BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: BelongsToCreateAssociationMixin<locations>;

  static initModel(sequelize: Sequelize): typeof inventorylist {
    return inventorylist.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'brandlist',
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'categorytypes',
          key: 'id'
        }
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'inventorylist',
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
          name: 'brandId',
          using: 'BTREE',
          fields: [
            { name: 'brandId' },
          ]
        },
        {
          name: 'categoryId',
          using: 'BTREE',
          fields: [
            { name: 'categoryId' },
          ]
        },
        {
          name: 'InventoryList_ibfk_3_idx',
          using: 'BTREE',
          fields: [
            { name: 'locationId' },
          ]
        },
      ]
    });
  }
}
