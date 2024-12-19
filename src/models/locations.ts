//src/models/locations.ts


import { DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { orderlist, orderlistId } from './orderlist';
import type { productlist, productlistId } from './productlist';
import type { settings, settingsId } from './settings';

export interface locationsAttributes {
  id: number;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: number;
  latitude?: number;
  logitude?: number;
  isDefault?: number;
}

export type locationsPk = 'id';
export type locationsId = locations[locationsPk];
export type locationsOptionalAttributes = 'id' | 'name' | 'address' | 'city' | 'state' | 'pincode' | 'latitude' | 'logitude' | 'isDefault';
export type locationsCreationAttributes = Optional<locationsAttributes, locationsOptionalAttributes>;

export class locations extends Model<locationsAttributes, locationsCreationAttributes> implements locationsAttributes {
  id!: number;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: number;
  latitude?: number;
  logitude?: number;
  isDefault?: number;

  // locations hasMany inventorylist via locationId
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
  // locations hasMany orderlist via locationId
  orderlists!: orderlist[];
  getOrderlists!: HasManyGetAssociationsMixin<orderlist>;
  setOrderlists!: HasManySetAssociationsMixin<orderlist, orderlistId>;
  addOrderlist!: HasManyAddAssociationMixin<orderlist, orderlistId>;
  addOrderlists!: HasManyAddAssociationsMixin<orderlist, orderlistId>;
  createOrderlist!: HasManyCreateAssociationMixin<orderlist>;
  removeOrderlist!: HasManyRemoveAssociationMixin<orderlist, orderlistId>;
  removeOrderlists!: HasManyRemoveAssociationsMixin<orderlist, orderlistId>;
  hasOrderlist!: HasManyHasAssociationMixin<orderlist, orderlistId>;
  hasOrderlists!: HasManyHasAssociationsMixin<orderlist, orderlistId>;
  countOrderlists!: HasManyCountAssociationsMixin;
  // locations hasMany productlist via locationId
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
  // locations hasMany settings via locationId
  settings!: settings[];
  getSettings!: HasManyGetAssociationsMixin<settings>;
  setSettings!: HasManySetAssociationsMixin<settings, settingsId>;
  addSetting!: HasManyAddAssociationMixin<settings, settingsId>;
  addSettings!: HasManyAddAssociationsMixin<settings, settingsId>;
  createSetting!: HasManyCreateAssociationMixin<settings>;
  removeSetting!: HasManyRemoveAssociationMixin<settings, settingsId>;
  removeSettings!: HasManyRemoveAssociationsMixin<settings, settingsId>;
  hasSetting!: HasManyHasAssociationMixin<settings, settingsId>;
  hasSettings!: HasManyHasAssociationsMixin<settings, settingsId>;
  countSettings!: HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof locations {
    return locations.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      city: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      state: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      latitude: {
        type: DataTypes.DECIMAL(20, 12),
        allowNull: true
      },
      logitude: {
        type: DataTypes.DECIMAL(20, 12),
        allowNull: true
      },
      isDefault: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      sequelize,
      tableName: 'locations',
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
