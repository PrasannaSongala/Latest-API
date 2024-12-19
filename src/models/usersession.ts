//src/models/usersession.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { user, userId } from './user';

export interface usersessionAttributes {
  sid: string;
  expires?: Date;
  data?: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
}

export type usersessionPk = 'sid';
export type usersessionId = usersession[usersessionPk];
export type usersessionOptionalAttributes = 'expires' | 'data' | 'createdAt' | 'updatedAt' | 'userId';
export type usersessionCreationAttributes = Optional<usersessionAttributes, usersessionOptionalAttributes>;

export class usersession extends Model<usersessionAttributes, usersessionCreationAttributes> implements usersessionAttributes {
  sid!: string;
  expires?: Date;
  data?: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string;

  // usersession belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof usersession {
    return usersession.init({
      sid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: true
      },
      data: {
        type: DataTypes.TEXT,
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
      tableName: 'usersession',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'sid' },
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
