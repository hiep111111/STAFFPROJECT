import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';
import NOTIFICATION_STATE from '../../Core/constants/notificationConstant.js';

const stockAdvaneSchema = mongoose.Schema({
    DocumentNo: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    SourceStoreCode : {
        type: DATA_TYPE.STRING,
        required: true,
    },
    SourceStoreName: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    DestinationStoreCode: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    DestinationStoreName: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    Recipientant: {
        type: DATA_TYPE.STRING,
        required: true,
    },
    State:{
        type: DATA_TYPE.STRING,
        default: NOTIFICATION_STATE.SENT
    },
    Description:{
        type: DATA_TYPE.STRING
    }
},
{
    timestamps: true,
});

const stockAdvaneModel = mongoose.model('stockAdvaneSchema', stockAdvaneSchema);
export default stockAdvaneModel;
