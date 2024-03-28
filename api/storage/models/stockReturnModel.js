import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';
import NOTIFICATION_STATE from '../../Core/constants/notificationConstant.js'

const stockReturnSchema = mongoose.Schema({
    StockReturnNumber:{
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    ReturnByUserName: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    CreatedBy: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    State:{
        type: DATA_TYPE.STRING,
        required: true,
        default: NOTIFICATION_STATE.SENT
    },
    Description: {
        type: DATA_TYPE.STRING
    },
},
{
    timestamps: true,
});


const stockReturnModel = mongoose.model('stockReturnSchema', stockReturnSchema);
export default stockReturnModel;
