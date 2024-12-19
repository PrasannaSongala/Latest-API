//src/models/inventorytransaction.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { sellerlist, sellerlistId } from './sellerlist';

export interface inventorytransactionAttributes {
  id: number;
  sellerId: number;
  inventoryId: number;
  invoiceId: string;
  purchaseDate: Date;
  vehicleNumber?: string;
  quantity: number;
  remainingQuantity: number;
  productCost?: number;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  sgstCost?: number;
  cgstCost?: number;
  igstCost?: number;
  otherCost?: number;
  totalCost?: number;
  inventoryUsed?: number;
  updatedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type inventorytransactionPk = 'id';
export type inventorytransactionId = inventorytransaction[inventorytransactionPk];
export type inventorytransactionOptionalAttributes = 'id' | 'vehicleNumber' | 'productCost' | 'transportationCost' | 'loadingCost' | 'unloadingCost' | 'sgstCost' | 'cgstCost' | 'igstCost' | 'otherCost' | 'totalCost' | 'inventoryUsed' | 'updatedBy' | 'createdAt' | 'updatedAt';
export type inventorytransactionCreationAttributes = Optional<inventorytransactionAttributes, inventorytransactionOptionalAttributes>;

export class inventorytransaction extends Model<inventorytransactionAttributes, inventorytransactionCreationAttributes> implements inventorytransactionAttributes {
  id!: number;
  sellerId!: number;
  inventoryId!: number;
  invoiceId!: string;
  purchaseDate!: Date;
  vehicleNumber?: string;
  quantity!: number;
  remainingQuantity!: number;
  productCost?: number;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  sgstCost?: number;
  cgstCost?: number;
  igstCost?: number;
  otherCost?: number;
  totalCost?: number;
  inventoryUsed?: number;
  updatedBy?: string;
  createdAt!: Date;
  updatedAt!: Date;

  // inventorytransaction belongsTo inventorylist via inventoryId
  inventory!: inventorylist;
  getInventory!: BelongsToGetAssociationMixin<inventorylist>;
  setInventory!: BelongsToSetAssociationMixin<inventorylist, inventorylistId>;
  createInventory!: BelongsToCreateAssociationMixin<inventorylist>;
  // inventorytransaction belongsTo sellerlist via sellerId
  seller!: sellerlist;
  getSeller!: BelongsToGetAssociationMixin<sellerlist>;
  setSeller!: BelongsToSetAssociationMixin<sellerlist, sellerlistId>;
  createSeller!: BelongsToCreateAssociationMixin<sellerlist>;

  static initModel(sequelize: Sequelize): typeof inventorytransaction {
    return inventorytransaction.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sellerlist',
          key: 'id'
        }
      },
      inventoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'inventorylist',
          key: 'id'
        }
      },
      invoiceId: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      vehicleNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      remainingQuantity: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      productCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      transportationCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      loadingCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      unloadingCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sgstCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      cgstCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      igstCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      otherCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      totalCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      inventoryUsed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      updatedBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'inventorytransaction',
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
          name: 'sellerId',
          using: 'BTREE',
          fields: [
            { name: 'sellerId' },
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
