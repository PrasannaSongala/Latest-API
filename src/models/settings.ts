//src/models/settings.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import type { locations, locationsId } from './locations';

export interface settingsAttributes {
  id: number;
  name: string;
  value?: string;
  note?: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt: Date;
  locationId?: number;
}

export type settingsPk = 'id';
export type settingsId = settings[settingsPk];
export type settingsOptionalAttributes = 'id' | 'value' | 'note' | 'updatedBy' | 'createdAt' | 'updatedAt' | 'locationId';
export type settingsCreationAttributes = Optional<settingsAttributes, settingsOptionalAttributes>;

export class settings extends Model<settingsAttributes, settingsCreationAttributes> implements settingsAttributes {
  id!: number;
  name!: string;
  value?: string;
  note?: string;
  updatedBy?: string;
  createdAt!: Date;
  updatedAt!: Date;
  locationId?: number;

  // settings belongsTo locations via locationId
  location!: locations;
  getLocation!: BelongsToGetAssociationMixin<locations>;
  setLocation!: BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: BelongsToCreateAssociationMixin<locations>;

  static initModel(sequelize: Sequelize): typeof settings {
    return settings.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'name'
      },
      value: {
        type: DataTypes.STRING(3000),
        allowNull: true
      },
      note: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      updatedBy: {
        type: DataTypes.STRING(255),
        allowNull: true
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
      tableName: 'settings',
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
          name: 'name',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'name' },
          ]
        },
        {
          name: 'settings_lfk1_idx',
          using: 'BTREE',
          fields: [
            { name: 'locationId' },
          ]
        },
      ]
    });
  }
}
