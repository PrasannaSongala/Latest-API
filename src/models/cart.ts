
import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { productlist, productlistId } from './productlist';
import type { user, userId } from './user';

export interface cartAttributes {
  id: number;
  quantity?: number;
  quantityUnit?: string;
  createdAt: Date;
  updatedAt: Date;
  productId?: number;
  userId?: string;
}

export type cartPk = 'id';
export type cartId = cart[cartPk];
export type cartOptionalAttributes = 'id' | 'quantity' | 'quantityUnit' | 'createdAt' | 'updatedAt' | 'productId' | 'userId';
export type cartCreationAttributes = Optional<cartAttributes, cartOptionalAttributes>;

export class cart extends Model<cartAttributes, cartCreationAttributes> implements cartAttributes {
  id!: number;
  quantity?: number;
  quantityUnit?: string;
  createdAt!: Date;
  updatedAt!: Date;
  productId?: number;
  userId?: string;

  // cart belongsTo productlist via productId
  product!: productlist;
  getProduct!: BelongsToGetAssociationMixin<productlist>;
  setProduct!: BelongsToSetAssociationMixin<productlist, productlistId>;
  createProduct!: BelongsToCreateAssociationMixin<productlist>;
  // cart belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof cart {
    return cart.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      quantityUnit: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productlist',
          key: 'id'
        }
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
      tableName: 'cart',
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
          name: 'productId',
          using: 'BTREE',
          fields: [
            { name: 'productId' },
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
