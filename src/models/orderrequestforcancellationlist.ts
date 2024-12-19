//src/models/orderrequestforcancellationlist.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { orderlist, orderlistId } from './orderlist';

export interface orderrequestforcancellationlistAttributes {
  id: number;
  reason?: string;
  active?: number;
  rejected?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
}

export type orderrequestforcancellationlistPk = 'id';
export type orderrequestforcancellationlistId = orderrequestforcancellationlist[orderrequestforcancellationlistPk];
export type orderrequestforcancellationlistOptionalAttributes = 'id' | 'reason' | 'active' | 'rejected' | 'createdAt' | 'updatedAt' | 'orderId';
export type orderrequestforcancellationlistCreationAttributes = Optional<orderrequestforcancellationlistAttributes, orderrequestforcancellationlistOptionalAttributes>;

export class orderrequestforcancellationlist extends Model<orderrequestforcancellationlistAttributes, orderrequestforcancellationlistCreationAttributes> implements orderrequestforcancellationlistAttributes {
  id!: number;
  reason?: string;
  active?: number;
  rejected?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;

  // orderrequestforcancellationlist belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof orderrequestforcancellationlist {
    return orderrequestforcancellationlist.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      reason: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      rejected: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orderlist',
          key: 'id'
        }
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'orderrequestforcancellationlist',
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
          name: 'orderId',
          using: 'BTREE',
          fields: [
            { name: 'orderId' },
          ]
        },
      ]
    });
  }
}
