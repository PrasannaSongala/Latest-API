//src/models/brandlist.ts

import { DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize} from 'sequelize';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { productlist, productlistId } from './productlist';

export interface brandlistAttributes {
  id: number;
  name: string;
  link?: string;
  type?: string;
  isDisabled?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type brandlistPk = 'id';
export type brandlistId = brandlist[brandlistPk];
export type brandlistOptionalAttributes = 'id' | 'link' | 'type' | 'isDisabled' | 'createdAt' | 'updatedAt';
export type brandlistCreationAttributes = Optional<brandlistAttributes, brandlistOptionalAttributes>;

export class brandlist extends Model<brandlistAttributes, brandlistCreationAttributes> implements brandlistAttributes {
  id!: number;
  name!: string;
  link?: string;
  type?: string;
  isDisabled?: number;
  createdAt!: Date;
  updatedAt!: Date;

  // brandlist hasMany inventorylist via brandId
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
  // brandlist hasMany productlist via brandId
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

  static initModel(sequelize: Sequelize): typeof brandlist {
    return brandlist.init({
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
      link: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      type: {
        type: DataTypes.STRING(50),
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
      tableName: 'brandlist',
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
