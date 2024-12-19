//src/models/orderdispatchdetail.ts


import { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, DataTypes, HasManyAddAssociationMixin, HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, Model, Optional, Sequelize } from 'sequelize';
import type { orderdeliverydetail, orderdeliverydetailId } from './orderdeliverydetail';
import type { orderdispatchitem, orderdispatchitemId } from './orderdispatchitem';
import type { orderlist, orderlistId } from './orderlist';

export interface orderdispatchdetailAttributes {
  id: number;
  deliveryAgentName?: string;
  deliveryAgentMobileNumber: string;
  vehicleName: string;
  vehicleNumber: string;
  ewayBillNumber?: string;
  invoiceNumber?: string;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  totalCost?: number;
  interestCost?: number;
  dispatchStatus?: string;
  creditDate?: Date;
  invoiceSent?: number;
  outForDeliveryAt?: Date;
  creditDateDay?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  placeOfDispatch?: string;
  transporter?: string;
  lrNumber?: string;
  termsOfDelivery?: string;
  destination?: string;
  tcsCost?: number;
}

export type orderdispatchdetailPk = 'id';
export type orderdispatchdetailId = orderdispatchdetail[orderdispatchdetailPk];
export type orderdispatchdetailOptionalAttributes = 'id' | 'deliveryAgentName' | 'ewayBillNumber' | 'invoiceNumber' | 'transportationCost' | 'loadingCost' | 'unloadingCost' | 'cgst' | 'sgst' | 'igst' | 'totalCost' | 'interestCost' | 'dispatchStatus' | 'creditDate' | 'invoiceSent' | 'outForDeliveryAt' | 'creditDateDay' | 'createdAt' | 'updatedAt' | 'orderId' | 'placeOfDispatch' | 'transporter' | 'lrNumber' | 'termsOfDelivery' | 'destination' | 'tcsCost';
export type orderdispatchdetailCreationAttributes = Optional<orderdispatchdetailAttributes, orderdispatchdetailOptionalAttributes>;

export class orderdispatchdetail extends Model<orderdispatchdetailAttributes, orderdispatchdetailCreationAttributes> implements orderdispatchdetailAttributes {
  id!: number;
  deliveryAgentName?: string;
  deliveryAgentMobileNumber!: string;
  vehicleName!: string;
  vehicleNumber!: string;
  ewayBillNumber?: string;
  invoiceNumber?: string;
  transportationCost?: number;
  loadingCost?: number;
  unloadingCost?: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  totalCost?: number;
  interestCost?: number;
  dispatchStatus?: string;
  creditDate?: Date;
  invoiceSent?: number;
  outForDeliveryAt?: Date;
  creditDateDay?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;
  placeOfDispatch?: string;
  transporter?: string;
  lrNumber?: string;
  termsOfDelivery?: string;
  destination?: string;
  tcsCost?: number;

  // orderdispatchdetail hasMany orderdeliverydetail via orderDispatchId
  orderdeliverydetails!: orderdeliverydetail[];
  getOrderdeliverydetails!: HasManyGetAssociationsMixin<orderdeliverydetail>;
  setOrderdeliverydetails!: HasManySetAssociationsMixin<orderdeliverydetail, orderdeliverydetailId>;
  addOrderdeliverydetail!: HasManyAddAssociationMixin<orderdeliverydetail, orderdeliverydetailId>;
  addOrderdeliverydetails!: HasManyAddAssociationsMixin<orderdeliverydetail, orderdeliverydetailId>;
  createOrderdeliverydetail!: HasManyCreateAssociationMixin<orderdeliverydetail>;
  removeOrderdeliverydetail!: HasManyRemoveAssociationMixin<orderdeliverydetail, orderdeliverydetailId>;
  removeOrderdeliverydetails!: HasManyRemoveAssociationsMixin<orderdeliverydetail, orderdeliverydetailId>;
  hasOrderdeliverydetail!: HasManyHasAssociationMixin<orderdeliverydetail, orderdeliverydetailId>;
  hasOrderdeliverydetails!: HasManyHasAssociationsMixin<orderdeliverydetail, orderdeliverydetailId>;
  countOrderdeliverydetails!: HasManyCountAssociationsMixin;
  // orderdispatchdetail hasMany orderdispatchitem via orderDispatchId
  orderdispatchitems!: orderdispatchitem[];
  getOrderdispatchitems!: HasManyGetAssociationsMixin<orderdispatchitem>;
  setOrderdispatchitems!: HasManySetAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  addOrderdispatchitem!: HasManyAddAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  addOrderdispatchitems!: HasManyAddAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  createOrderdispatchitem!: HasManyCreateAssociationMixin<orderdispatchitem>;
  removeOrderdispatchitem!: HasManyRemoveAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  removeOrderdispatchitems!: HasManyRemoveAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  hasOrderdispatchitem!: HasManyHasAssociationMixin<orderdispatchitem, orderdispatchitemId>;
  hasOrderdispatchitems!: HasManyHasAssociationsMixin<orderdispatchitem, orderdispatchitemId>;
  countOrderdispatchitems!: HasManyCountAssociationsMixin;
  // orderdispatchdetail belongsTo orderlist via orderId
  order!: orderlist;
  getOrder!: BelongsToGetAssociationMixin<orderlist>;
  setOrder!: BelongsToSetAssociationMixin<orderlist, orderlistId>;
  createOrder!: BelongsToCreateAssociationMixin<orderlist>;

  static initModel(sequelize: Sequelize): typeof orderdispatchdetail {
    return orderdispatchdetail.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      deliveryAgentName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      deliveryAgentMobileNumber: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      vehicleName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      vehicleNumber: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      ewayBillNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      invoiceNumber: {
        type: DataTypes.STRING(255),
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
      totalCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      interestCost: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      dispatchStatus: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      creditDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      invoiceSent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      outForDeliveryAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      creditDateDay: {
        type: DataTypes.INTEGER,
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
      placeOfDispatch: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      transporter: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      lrNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      termsOfDelivery: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      destination: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      tcsCost: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: '',
      updatedAt: ''
    }, {
      sequelize,
      tableName: 'orderdispatchdetail',
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
