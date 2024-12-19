//src/models/user.ts
 
import { DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { cart, cartId } from './cart';
import type { orderlist, orderlistId } from './orderlist';
import type { useraddress, useraddressId } from './useraddress';
import type { userdetail, userdetailId } from './userdetail';
import type { userlogin, userloginId } from './userlogin';
import type { usersession, usersessionId } from './usersession';


export interface userAttributes {
  id: string;
  mobileNumber?: string;
  fullName?: string;
  roleId?: string;
  isMobileConfirmed?: number;
  isDeleted?: number;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type userPk = 'id';
export type userId = user[userPk];
export type userOptionalAttributes = 'mobileNumber' | 'fullName' | 'roleId' | 'isMobileConfirmed' | 'isDeleted' | 'createdBy' | 'updatedBy' | 'deletedBy';
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: string;
  mobileNumber?: string;
  fullName?: string;
  roleId?: string;
  isMobileConfirmed?: number;
  isDeleted?: number;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt!: Date;
  updatedAt!: Date;

  // user hasMany cart via userId
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
  
  // user hasMany orderlist via userId
  orderlists!: orderlist[];
  getOrderlists!: HasManyGetAssociationsMixin<orderlist>;
  setOrderlists!: HasManySetAssociationsMixin<orderlist, orderlistId>;
  addOrderlist!: HasManyAddAssociationMixin<orderlist, orderlistId>;
  addOrderlists!: HasManyAddAssociationsMixin<orderlist, orderlistId>;
  createOrderlist!: HasManyCreateAssociationMixin<orderlist>;
  removeOrderlist!: HasManyRemoveAssociationMixin<orderlist, orderlistId>;
  removeOrderlists!: HasManyRemoveAssociationsMixin<orderlist, orderlistId>;
  hasOrderlist!: HasManyHasAssociationMixin<orderlist, orderlistId>;
  hasOrderlists!: HasManyHasAssociationsMixin<orderlist, orderlistId>;
  countOrderlists!: HasManyCountAssociationsMixin;
  
  // user hasMany useraddress via userId
  useraddresses!: useraddress[];
  getUseraddresses!: HasManyGetAssociationsMixin<useraddress>;
  setUseraddresses!: HasManySetAssociationsMixin<useraddress, useraddressId>;
  addUseraddress!: HasManyAddAssociationMixin<useraddress, useraddressId>;
  addUseraddresses!: HasManyAddAssociationsMixin<useraddress, useraddressId>;
  createUseraddress!: HasManyCreateAssociationMixin<useraddress>;
  removeUseraddress!: HasManyRemoveAssociationMixin<useraddress, useraddressId>;
  removeUseraddresses!: HasManyRemoveAssociationsMixin<useraddress, useraddressId>;
  hasUseraddress!: HasManyHasAssociationMixin<useraddress, useraddressId>;
  hasUseraddresses!: HasManyHasAssociationsMixin<useraddress, useraddressId>;
  countUseraddresses!: HasManyCountAssociationsMixin;
  
  // user hasMany userdetail via userId
  userdetails!: userdetail[];
  getUserdetails!: HasManyGetAssociationsMixin<userdetail>;
  setUserdetails!: HasManySetAssociationsMixin<userdetail, userdetailId>;
  addUserdetail!: HasManyAddAssociationMixin<userdetail, userdetailId>;
  addUserdetails!: HasManyAddAssociationsMixin<userdetail, userdetailId>;
  createUserdetail!: HasManyCreateAssociationMixin<userdetail>;
  removeUserdetail!: HasManyRemoveAssociationMixin<userdetail, userdetailId>;
  removeUserdetails!: HasManyRemoveAssociationsMixin<userdetail, userdetailId>;
  hasUserdetail!: HasManyHasAssociationMixin<userdetail, userdetailId>;
  hasUserdetails!: HasManyHasAssociationsMixin<userdetail, userdetailId>;
  countUserdetails!: HasManyCountAssociationsMixin;
  
  // user hasMany userlogin via userId
  userlogins!: userlogin[];
  getUserlogins!: HasManyGetAssociationsMixin<userlogin>;
  setUserlogins!: HasManySetAssociationsMixin<userlogin, userloginId>;
  addUserlogin!: HasManyAddAssociationMixin<userlogin, userloginId>;
  addUserlogins!: HasManyAddAssociationsMixin<userlogin, userloginId>;
  createUserlogin!: HasManyCreateAssociationMixin<userlogin>;
  removeUserlogin!: HasManyRemoveAssociationMixin<userlogin, userloginId>;
  removeUserlogins!: HasManyRemoveAssociationsMixin<userlogin, userloginId>;
  hasUserlogin!: HasManyHasAssociationMixin<userlogin, userloginId>;
  hasUserlogins!: HasManyHasAssociationsMixin<userlogin, userloginId>;
  countUserlogins!: HasManyCountAssociationsMixin;
  
  // user hasMany usersession via userId
  usersessions!: usersession[];
  getUsersessions!: HasManyGetAssociationsMixin<usersession>;
  setUsersessions!: HasManySetAssociationsMixin<usersession, usersessionId>;
  addUsersession!: HasManyAddAssociationMixin<usersession, usersessionId>;
  addUsersessions!: HasManyAddAssociationsMixin<usersession, usersessionId>;
  createUsersession!: HasManyCreateAssociationMixin<usersession>;
  removeUsersession!: HasManyRemoveAssociationMixin<usersession, usersessionId>;
  removeUsersessions!: HasManyRemoveAssociationsMixin<usersession, usersessionId>;
  hasUsersession!: HasManyHasAssociationMixin<usersession, usersessionId>;
  hasUsersessions!: HasManyHasAssociationsMixin<usersession, usersessionId>;
  countUsersessions!: HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize): typeof user {
    return user.init({
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true
      },
      mobileNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
        
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      roleId: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      isMobileConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // or true depending on your logic
      },
      createdBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      updatedBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      deletedBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      }
    }, {
      sequelize,
      tableName: 'user',
      timestamps: true,  // Enable timestamps
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }]
        }
      ]
    });
  }
}
