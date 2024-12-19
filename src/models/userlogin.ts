//src/models/userlogin.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { user, userId } from './user';

export interface userloginAttributes {
  userName: string;
  password?: string;
  salt?: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
}

export type userloginPk = 'userName';
export type userloginId = userlogin[userloginPk];
export type userloginOptionalAttributes = 'password' | 'salt' | 'createdAt' | 'updatedAt' | 'userId';
export type userloginCreationAttributes = Optional<userloginAttributes, userloginOptionalAttributes>;

export class userlogin extends Model<userloginAttributes, userloginCreationAttributes> implements userloginAttributes {
  userName!: string;
  password?: string;
  salt?: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string;

  // userlogin belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof userlogin {
    return userlogin.init({
      userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: DataTypes.CHAR(128),
        allowNull: true
      },
      salt: {
        type: DataTypes.STRING(100),
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
      tableName: 'userlogin',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'userName' },
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
