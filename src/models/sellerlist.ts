
import { DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { inventorytransaction, inventorytransactionId } from './inventorytransaction';

export interface sellerlistAttributes {
  id: number;
  name: string;
  companyName: string;
  gstin: string;
  mobileNumber: string;
  emailId?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  alternateMobile?: string;
  isDisabled?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type sellerlistPk = 'id';
export type sellerlistId = sellerlist[sellerlistPk];
export type sellerlistOptionalAttributes = 'id' | 'emailId' | 'line1' | 'line2' | 'pincode' | 'city' | 'state' | 'alternateMobile' | 'isDisabled' | 'createdAt' | 'updatedAt';
export type sellerlistCreationAttributes = Optional<sellerlistAttributes, sellerlistOptionalAttributes>;

export class sellerlist extends Model<sellerlistAttributes, sellerlistCreationAttributes> implements sellerlistAttributes {
  id!: number;
  name!: string;
  companyName!: string;
  gstin!: string;
  mobileNumber!: string;
  emailId?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  alternateMobile?: string;
  isDisabled?: number;
  createdAt!: Date;
  updatedAt!: Date;

  // sellerlist hasMany inventorytransaction via sellerId
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

  static initModel(sequelize: Sequelize): typeof sellerlist {
    return sellerlist.init({
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
      companyName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      gstin: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      mobileNumber: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      emailId: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      line1: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      line2: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      state: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      alternateMobile: {
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
      tableName: 'sellerlist',
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
