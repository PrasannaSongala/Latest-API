//src/models/productlist.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { brandlist, brandlistId } from './brandlist';
import type { cart, cartId } from './cart';
import type { categorytypes, categorytypesId } from './categorytypes';
import type { inventorylist, inventorylistId } from './inventorylist';
import type { locations, locationsId } from './locations';
import type { orderitem, orderitemId } from './orderitem';
import type { productdimensions, productdimensionsId } from './productdimensions';

export interface productlistAttributes {
  id: number;
  name: string;
  imageLink?: string;
  description?: string;
  primaryRate: number;
  cgstPercent: number;
  igstPercent: number;
  sgstPercent: number;
  conversionRatio?: number;
  hsnCode: string;
  isDeleted?: number;
  isDisabled?: number;
  createdAt: Date;
  updatedAt: Date;
  categoryId?: number;
  brandId?: number;
  inventoryId?: number;
  locationId?: number;
}

export type productlistPk = 'id';
export type productlistId = productlist[productlistPk];
export type productlistOptionalAttributes = 'id' | 'imageLink' | 'description' | 'conversionRatio' | 'isDeleted' | 'isDisabled' | 'createdAt' | 'updatedAt' | 'categoryId' | 'brandId' | 'inventoryId' | 'locationId';
export type productlistCreationAttributes = Optional<productlistAttributes, productlistOptionalAttributes>;

export class productlist extends Model<productlistAttributes, productlistCreationAttributes> implements productlistAttributes {
  id!: number;
  name!: string;
  imageLink?: string;
  description?: string;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio?: number;
  hsnCode!: string;
  isDeleted?: number;
  isDisabled?: number;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId?: number;
  brandId?: number;
  inventoryId?: number;
  locationId?: number;

  // productlist belongsTo brandlist via brandId
  brand!: brandlist;
  getBrand!: BelongsToGetAssociationMixin<brandlist>;
  setBrand!: BelongsToSetAssociationMixin<brandlist, brandlistId>;
  createBrand!: BelongsToCreateAssociationMixin<brandlist>;
  // productlist belongsTo categorytypes via categoryId
  category!: categorytypes;
  getCategory!: BelongsToGetAssociationMixin<categorytypes>;
  setCategory!: BelongsToSetAssociationMixin<categorytypes, categorytypesId>;
  createCategory!: BelongsToCreateAssociationMixin<categorytypes>;
  // productlist belongsTo inventorylist via inventoryId
  inventory!: inventorylist;
  getInventory!: BelongsToGetAssociationMixin<inventorylist>;
  setInventory!: BelongsToSetAssociationMixin<inventorylist, inventorylistId>;
  createInventory!: BelongsToCreateAssociationMixin<inventorylist>;
  // productlist belongsTo locations via locationId
  location!: locations;
  getLocation!: BelongsToGetAssociationMixin<locations>;
  setLocation!: BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: BelongsToCreateAssociationMixin<locations>;
  // productlist hasMany cart via productId
  carts!: cart[];
  getCarts!: HasManyGetAssociationsMixin<cart>;
  setCarts!: HasManySetAssociationsMixin<cart, cartId>;
  addCart!: HasManyAddAssociationMixin<cart, cartId>;
  addCarts!: HasManyAddAssociationsMixin<cart, cartId>;
  createCart!: HasManyCreateAssociationMixin<cart>;
  removeCart!: HasManyRemoveAssociationMixin<cart, cartId>;
  removeCarts!: HasManyRemoveAssociationsMixin<cart, cartId>;
  hasCart!: HasManyHasAssociationMixin<cart, cartId>;
  hasCarts!: HasManyHasAssociationsMixin<cart, cartId>;
  countCarts!: HasManyCountAssociationsMixin;
  // productlist hasMany orderitem via productId
  orderitems!: orderitem[];
  getOrderitems!: HasManyGetAssociationsMixin<orderitem>;
  setOrderitems!: HasManySetAssociationsMixin<orderitem, orderitemId>;
  addOrderitem!: HasManyAddAssociationMixin<orderitem, orderitemId>;
  addOrderitems!: HasManyAddAssociationsMixin<orderitem, orderitemId>;
  createOrderitem!: HasManyCreateAssociationMixin<orderitem>;
  removeOrderitem!: HasManyRemoveAssociationMixin<orderitem, orderitemId>;
  removeOrderitems!: HasManyRemoveAssociationsMixin<orderitem, orderitemId>;
  hasOrderitem!: HasManyHasAssociationMixin<orderitem, orderitemId>;
  hasOrderitems!: HasManyHasAssociationsMixin<orderitem, orderitemId>;
  countOrderitems!: HasManyCountAssociationsMixin;
  // productlist hasMany productdimensions via productId
  productdimensions!: productdimensions[];
  getProductdimensions!: HasManyGetAssociationsMixin<productdimensions>;
  setProductdimensions!: HasManySetAssociationsMixin<productdimensions, productdimensionsId>;
  addProductdimension!: HasManyAddAssociationMixin<productdimensions, productdimensionsId>;
  addProductdimensions!: HasManyAddAssociationsMixin<productdimensions, productdimensionsId>;
  createProductdimension!: HasManyCreateAssociationMixin<productdimensions>;
  removeProductdimension!: HasManyRemoveAssociationMixin<productdimensions, productdimensionsId>;
  removeProductdimensions!: HasManyRemoveAssociationsMixin<productdimensions, productdimensionsId>;
  hasProductdimension!: HasManyHasAssociationMixin<productdimensions, productdimensionsId>;
  hasProductdimensions!: HasManyHasAssociationsMixin<productdimensions, productdimensionsId>;
  countProductdimensions!: HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof productlist {
    return productlist.init({
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
      imageLink: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      primaryRate: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cgstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      igstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      sgstPercent: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      conversionRatio: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1
      },
      hsnCode: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      isDisabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'categorytypes',
          key: 'id'
        }
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'brandlist',
          key: 'id'
        }
      },
      inventoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'inventorylist',
          key: 'id'
        }
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
      tableName: 'productlist',
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
          name: 'categoryId',
          using: 'BTREE',
          fields: [
            { name: 'categoryId' },
          ]
        },
        {
          name: 'brandId',
          using: 'BTREE',
          fields: [
            { name: 'brandId' },
          ]
        },
        {
          name: 'inventoryId',
          using: 'BTREE',
          fields: [
            { name: 'inventoryId' },
          ]
        },
        {
          name: 'ProductList_ibfk_4_idx',
          using: 'BTREE',
          fields: [
            { name: 'locationId' },
          ]
        },
      ]
    });
  }
}
