//src/models/userdetail.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { user, userId } from './user';

export interface userdetailAttributes {
  id: number;
  userType?: string;
  fullname?: string;
  gstin?: string;
  pan?: string;
  aadhaar?: string;
  emailId?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  alternateMobile?: string;
  defaultAddressId?: number;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
  enableSMS?: number;
  enableWhatsApp?: number;
}

export type userdetailPk = 'id';
export type userdetailId = userdetail[userdetailPk];
export type userdetailOptionalAttributes = 'id' | 'userType' | 'fullname' | 'gstin' | 'pan' | 'aadhaar' | 'emailId' | 'line1' | 'line2' | 'pincode' | 'city' | 'state' | 'alternateMobile' | 'defaultAddressId' | 'createdAt' | 'updatedAt' | 'userId' | 'enableSMS' | 'enableWhatsApp';
export type userdetailCreationAttributes = Optional<userdetailAttributes, userdetailOptionalAttributes>;

export class userdetail extends Model<userdetailAttributes, userdetailCreationAttributes> implements userdetailAttributes {
  id!: number;
  userType?: string;
  fullname?: string;
  gstin?: string;
  pan?: string;
  aadhaar?: string;
  emailId?: string;
  line1?: string;
  line2?: string;
  pincode?: number;
  city?: string;
  state?: string;
  alternateMobile?: string;
  defaultAddressId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string;
  enableSMS?: number;
  enableWhatsApp?: number;

  // userdetail belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof userdetail {
    return userdetail.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      userType: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      fullname: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      gstin: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      aadhaar: {
        type: DataTypes.STRING(255),
        allowNull: true
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
      defaultAddressId: {
        type: DataTypes.INTEGER,
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
      enableSMS: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      enableWhatsApp: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'userdetail',
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
