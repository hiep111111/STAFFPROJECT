import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';
import NOTIFICATION_STATE from '../../Core/constants/notificationConstant.js'

const purchaseOrderSchema = mongoose.Schema({
    ProductID: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Department: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    OrderCompany: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Supplier: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    RequestedBy: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    SupportedBy: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Customer: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    ProductName: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Quantity: {
        type: DATA_TYPE.NUMBER,
        required: DATA_TYPE.TRUE,
    },
    UnitPrice: {
        type: DATA_TYPE.NUMBER,
        required: DATA_TYPE.TRUE,
    },
    IntoMonneyNoVAT: {
        type: DATA_TYPE.NUMBER,
        required: DATA_TYPE.TRUE,
    },
    VAT: {
        type: DATA_TYPE.NUMBER,
        required: DATA_TYPE.TRUE,
    },
    IntoMonney: {
        type: DATA_TYPE.NUMBER,
        required: DATA_TYPE.TRUE,
    },
    State: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
        default: NOTIFICATION_STATE.SENT
    }
},
    {
        timestamps: true,
    });


const purchaseOrderModel = mongoose.model('purchaseOrderModel', purchaseOrderSchema);
export default purchaseOrderModel;
