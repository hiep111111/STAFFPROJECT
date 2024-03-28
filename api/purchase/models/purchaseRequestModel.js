import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';
import NOTIFICATION_STATE from '../../Core/constants/notificationConstant.js';

const purchaseRequestSchema = mongoose.Schema({
    ProductID: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    Department: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    OrderCompany : {
        type: DATA_TYPE.STRING,
        required: true,
    },
    PurchaseRequisitionType: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    RequestedBy: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    SupportedBy: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    Customer: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    ProductName: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    Quantity : {
        type: DATA_TYPE.NUMBER,
        required: true,
    },
    UnitPrice: {
        type: DATA_TYPE.NUMBER,
        required: true,
    },
    IntoMonneyNoVAT: {
        type: DATA_TYPE.NUMBER,
        required: true,
    },
    VAT: {
        type: DATA_TYPE.NUMBER,
        required: true,
    },
    IntoMonney: {
        type: DATA_TYPE.NUMBER,
        required: true,
    },
    State:{
        type: DATA_TYPE.STRING,
        required: true,
        default: NOTIFICATION_STATE.SENT
    }
},
{
    timestamps: true,
});

const purchaseRequestModel = mongoose.model('purchaseRequestModel', purchaseRequestSchema);
export default purchaseRequestModel;
