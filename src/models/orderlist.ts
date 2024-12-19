//src/models/orderlist.ts

import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { locations, locationsId } from './locations';
import type { orderdispatchdetail, orderdispatchdetailId } from './orderdispatchdetail';
import type { orderinventorydetail, orderinventorydetailId } from './orderinventorydetail';
import type { orderinvoicedetail, orderinvoicedetailId } from './orderinvoicedetail';
import type { orderitem, orderitemId } from './orderitem';
import type { orderrequestforcancellationlist, orderrequestforcancellationlistId } from './orderrequestforcancellationlist';
import type { paymenttransactions, paymenttransactionsId } from './paymenttransactions';
import type { razorpayorder, razorpayorderId } from './razorpayorder';
import type { user, userId } from './user';

export interface orderlistAttributes {
  id: number;
  baseOrderId?: number;
  orderStatus?: string;
  productCost?: number;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  advanceTokenCost?: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  discount?: number;
  totalCost?: number;
  totalProduct?: number;
  userType?: string;
  gstin?: string;
  pan?: string;
  aadhaar?: string;
  emailId?: string;
  preferredPaymentMethod?: string;
  creditDays?: number;
  billingFullName?: string;
  billingMobileNumber?: string;
  billingLine1?: string;
  billingLine2?: string;
  billingPincode?: number;
  billingCity?: string;
  billingState?: string;
  shippingFullName?: string;
  shippingMobileNumber?: string;
  shippingLine1?: string;
  shippingLine2?: string;
  shippingPincode?: number;
  shippingCity?: string;
  shippingState?: string;
  orderedAt?: Date;
  orderedUpdatedAt?: Date;
  orderedAgreedAt?: Date;
  paidAt?: Date;
  outForDeliveryAt?: Date;
  deliveredAt?: Date;
  closedAt?: Date;
  salesAgentId?: string;
  isInterStateDelivery?: number;
  orderType?: string;
  interestPercentage?: number;
  note?: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string;
  purchaseOrderNumber?: string;
  purchaseOrderDate?: Date;
  locationId?: number;
}

export type orderlistPk = 'id';
export type orderlistId = orderlist[orderlistPk];
export type orderlistOptionalAttributes = 'id' | 'baseOrderId' | 'orderStatus' | 'productCost' | 'transportationCost' | 'loadingCost' | 'unloadingCost' | 'advanceTokenCost' | 'cgst' | 'sgst' | 'igst' | 'discount' | 'totalCost' | 'totalProduct' | 'userType' | 'gstin' | 'pan' | 'aadhaar' | 'emailId' | 'preferredPaymentMethod' | 'creditDays' | 'billingFullName' | 'billingMobileNumber' | 'billingLine1' | 'billingLine2' | 'billingPincode' | 'billingCity' | 'billingState' | 'shippingFullName' | 'shippingMobileNumber' | 'shippingLine1' | 'shippingLine2' | 'shippingPincode' | 'shippingCity' | 'shippingState' | 'orderedAt' | 'orderedUpdatedAt' | 'orderedAgreedAt' | 'paidAt' | 'outForDeliveryAt' | 'deliveredAt' | 'closedAt' | 'salesAgentId' | 'isInterStateDelivery' | 'orderType' | 'interestPercentage' | 'note' | 'createdAt' | 'updatedAt' | 'userId' | 'purchaseOrderNumber' | 'purchaseOrderDate' | 'locationId';
export type orderlistCreationAttributes = Optional<orderlistAttributes, orderlistOptionalAttributes>;

export class orderlist extends Model<orderlistAttributes, orderlistCreationAttributes> implements orderlistAttributes {
  id!: number;
  baseOrderId?: number;
  orderStatus?: string;
  productCost?: number;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  advanceTokenCost?: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  discount?: number;
  totalCost?: number;
  totalProduct?: number;
  userType?: string;
  gstin?: string;
  pan?: string;
  aadhaar?: string;
  emailId?: string;
  preferredPaymentMethod?: string;
  creditDays?: number;
  billingFullName?: string;
  billingMobileNumber?: string;
  billingLine1?: string;
  billingLine2?: string;
  billingPincode?: number;
  billingCity?: string;
  billingState?: string;
  shippingFullName?: string;
  shippingMobileNumber?: string;
  shippingLine1?: string;
  shippingLine2?: string;
  shippingPincode?: number;
  shippingCity?: string;
  shippingState?: string;
  orderedAt?: Date;
  orderedUpdatedAt?: Date;
  orderedAgreedAt?: Date;
  paidAt?: Date;
  outForDeliveryAt?: Date;
  deliveredAt?: Date;
  closedAt?: Date;
  salesAgentId?: string;
  isInterStateDelivery?: number;
  orderType?: string;
  interestPercentage?: number;
  note?: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string;
  purchaseOrderNumber?: string;
  purchaseOrderDate?: Date;
  locationId?: number;

  // orderlist belongsTo locations via locationId
  location!: locations;
  getLocation!: BelongsToGetAssociationMixin<locations>;
  setLocation!: BelongsToSetAssociationMixin<locations, locationsId>;
  createLocation!: BelongsToCreateAssociationMixin<locations>;
  // orderlist hasMany orderdispatchdetail via orderId
  orderdispatchdetails!: orderdispatchdetail[];
  getOrderdispatchdetails!: HasManyGetAssociationsMixin<orderdispatchdetail>;
  setOrderdispatchdetails!: HasManySetAssociationsMixin<orderdispatchdetail, orderdispatchdetailId>;
  addOrderdispatchdetail!: HasManyAddAssociationMixin<orderdispatchdetail, orderdispatchdetailId>;
  addOrderdispatchdetails!: HasManyAddAssociationsMixin<orderdispatchdetail, orderdispatchdetailId>;
  createOrderdispatchdetail!: HasManyCreateAssociationMixin<orderdispatchdetail>;
  removeOrderdispatchdetail!: HasManyRemoveAssociationMixin<orderdispatchdetail, orderdispatchdetailId>;
  removeOrderdispatchdetails!: HasManyRemoveAssociationsMixin<orderdispatchdetail, orderdispatchdetailId>;
  hasOrderdispatchdetail!: HasManyHasAssociationMixin<orderdispatchdetail, orderdispatchdetailId>;
  hasOrderdispatchdetails!: HasManyHasAssociationsMixin<orderdispatchdetail, orderdispatchdetailId>;
  countOrderdispatchdetails!: HasManyCountAssociationsMixin;
  // orderlist hasMany orderinventorydetail via orderId
  orderinventorydetails!: orderinventorydetail[];
  getOrderinventorydetails!: HasManyGetAssociationsMixin<orderinventorydetail>;
  setOrderinventorydetails!: HasManySetAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  addOrderinventorydetail!: HasManyAddAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  addOrderinventorydetails!: HasManyAddAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  createOrderinventorydetail!: HasManyCreateAssociationMixin<orderinventorydetail>;
  removeOrderinventorydetail!: HasManyRemoveAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  removeOrderinventorydetails!: HasManyRemoveAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  hasOrderinventorydetail!: HasManyHasAssociationMixin<orderinventorydetail, orderinventorydetailId>;
  hasOrderinventorydetails!: HasManyHasAssociationsMixin<orderinventorydetail, orderinventorydetailId>;
  countOrderinventorydetails!: HasManyCountAssociationsMixin;
  // orderlist hasMany orderinvoicedetail via orderId
  orderinvoicedetails!: orderinvoicedetail[];
  getOrderinvoicedetails!: HasManyGetAssociationsMixin<orderinvoicedetail>;
  setOrderinvoicedetails!: HasManySetAssociationsMixin<orderinvoicedetail, orderinvoicedetailId>;
  addOrderinvoicedetail!: HasManyAddAssociationMixin<orderinvoicedetail, orderinvoicedetailId>;
  addOrderinvoicedetails!: HasManyAddAssociationsMixin<orderinvoicedetail, orderinvoicedetailId>;
  createOrderinvoicedetail!: HasManyCreateAssociationMixin<orderinvoicedetail>;
  removeOrderinvoicedetail!: HasManyRemoveAssociationMixin<orderinvoicedetail, orderinvoicedetailId>;
  removeOrderinvoicedetails!: HasManyRemoveAssociationsMixin<orderinvoicedetail, orderinvoicedetailId>;
  hasOrderinvoicedetail!: HasManyHasAssociationMixin<orderinvoicedetail, orderinvoicedetailId>;
  hasOrderinvoicedetails!: HasManyHasAssociationsMixin<orderinvoicedetail, orderinvoicedetailId>;
  countOrderinvoicedetails!: HasManyCountAssociationsMixin;
  // orderlist hasMany orderitem via orderId
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
  // orderlist hasMany orderrequestforcancellationlist via orderId
  orderrequestforcancellationlists!: orderrequestforcancellationlist[];
  getOrderrequestforcancellationlists!: HasManyGetAssociationsMixin<orderrequestforcancellationlist>;
  setOrderrequestforcancellationlists!: HasManySetAssociationsMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  addOrderrequestforcancellationlist!: HasManyAddAssociationMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  addOrderrequestforcancellationlists!: HasManyAddAssociationsMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  createOrderrequestforcancellationlist!: HasManyCreateAssociationMixin<orderrequestforcancellationlist>;
  removeOrderrequestforcancellationlist!: HasManyRemoveAssociationMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  removeOrderrequestforcancellationlists!: HasManyRemoveAssociationsMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  hasOrderrequestforcancellationlist!: HasManyHasAssociationMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  hasOrderrequestforcancellationlists!: HasManyHasAssociationsMixin<orderrequestforcancellationlist, orderrequestforcancellationlistId>;
  countOrderrequestforcancellationlists!: HasManyCountAssociationsMixin;
  // orderlist hasMany paymenttransactions via orderId
  paymenttransactions!: paymenttransactions[];
  getPaymenttransactions!: HasManyGetAssociationsMixin<paymenttransactions>;
  setPaymenttransactions!: HasManySetAssociationsMixin<paymenttransactions, paymenttransactionsId>;
  addPaymenttransaction!: HasManyAddAssociationMixin<paymenttransactions, paymenttransactionsId>;
  addPaymenttransactions!: HasManyAddAssociationsMixin<paymenttransactions, paymenttransactionsId>;
  createPaymenttransaction!: HasManyCreateAssociationMixin<paymenttransactions>;
  removePaymenttransaction!: HasManyRemoveAssociationMixin<paymenttransactions, paymenttransactionsId>;
  removePaymenttransactions!: HasManyRemoveAssociationsMixin<paymenttransactions, paymenttransactionsId>;
  hasPaymenttransaction!: HasManyHasAssociationMixin<paymenttransactions, paymenttransactionsId>;
  hasPaymenttransactions!: HasManyHasAssociationsMixin<paymenttransactions, paymenttransactionsId>;
  countPaymenttransactions!: HasManyCountAssociationsMixin;
  // orderlist hasMany razorpayorder via orderId
  razorpayorders!: razorpayorder[];
  getRazorpayorders!: HasManyGetAssociationsMixin<razorpayorder>;
  setRazorpayorders!: HasManySetAssociationsMixin<razorpayorder, razorpayorderId>;
  addRazorpayorder!: HasManyAddAssociationMixin<razorpayorder, razorpayorderId>;
  addRazorpayorders!: HasManyAddAssociationsMixin<razorpayorder, razorpayorderId>;
  createRazorpayorder!: HasManyCreateAssociationMixin<razorpayorder>;
  removeRazorpayorder!: HasManyRemoveAssociationMixin<razorpayorder, razorpayorderId>;
  removeRazorpayorders!: HasManyRemoveAssociationsMixin<razorpayorder, razorpayorderId>;
  hasRazorpayorder!: HasManyHasAssociationMixin<razorpayorder, razorpayorderId>;
  hasRazorpayorders!: HasManyHasAssociationsMixin<razorpayorder, razorpayorderId>;
  countRazorpayorders!: HasManyCountAssociationsMixin;
  // orderlist belongsTo user via userId
  user!: user;
  getUser!: BelongsToGetAssociationMixin<user>;
  setUser!: BelongsToSetAssociationMixin<user, userId>;
  createUser!: BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize): typeof orderlist {
    return orderlist.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      baseOrderId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      orderStatus: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      productCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      transportationCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      loadingCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      unloadingCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      advanceTokenCost: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      cgst: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sgst: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      igst: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      totalCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      totalProduct: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      userType: {
        type: DataTypes.STRING(20),
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
      preferredPaymentMethod: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      creditDays: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      billingFullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      billingMobileNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
      },
      billingLine1: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      billingLine2: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      billingPincode: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      billingCity: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      billingState: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      shippingFullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0'
      },
      shippingMobileNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: '0'
      },
      shippingLine1: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      shippingLine2: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      shippingPincode: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      shippingCity: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      shippingState: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      orderedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      orderedUpdatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      orderedAgreedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      paidAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      outForDeliveryAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      deliveredAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      closedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      salesAgentId: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      isInterStateDelivery: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      orderType: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      interestPercentage: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      note: {
        type: DataTypes.STRING(255),
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
      purchaseOrderNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      purchaseOrderDate: {
        type: DataTypes.DATE,
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
      tableName: 'orderlist',
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
        {
          name: 'order_list_order_status',
          using: 'BTREE',
          fields: [
            { name: 'orderStatus' },
          ]
        },
        {
          name: 'OrderList_ibfk_2_idx',
          using: 'BTREE',
          fields: [
            { name: 'locationId' },
          ]
        },
      ]
    });
  }
}
