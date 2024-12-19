//src/models/useraddress.ts
import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { user, userId } from './user';

export interface useraddressAttributes {
  id: number;
  fullName?: string;
  mobileNumber?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
}

export type useraddressPk = 'id';
export type useraddressId = useraddress[useraddressPk];
export type useraddressOptionalAttributes = 'id' | 'fullName' | 'mobileNumber' | 'line1' | 'line2' | 'pincode' | 'city' | 'state' | 'createdAt' | 'updatedAt' | 'userId';
export type useraddressCreationAttributes = Optional<useraddressAttributes, useraddressOptionalAttributes>;

export class useraddress extends Model<useraddressAttributes, useraddressCreationAttributes> implements useraddressAttributes {
  id!: number;
  fullName?: string;
  mobileNumber?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string;

  // useraddress belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof useraddress {
    return useraddress.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      mobileNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
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
      userId: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'useraddress',
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
          name: 'userId',
          using: 'BTREE',
          fields: [
            { name: 'userId' },
          ]
        },
      ]
    });
  }
}
