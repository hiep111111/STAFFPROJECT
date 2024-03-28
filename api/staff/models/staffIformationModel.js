import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';

const staffIformationSchema = mongoose.Schema({
    UserName:{
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    BirthDay: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    StartDay: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    EndDay  : {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Position: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    CompanyName: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    DepartmentName: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    }
},
{
    timestamps: true,
});


const staffIformationModel = mongoose.model('staffIformationModel', staffIformationSchema);
export default staffIformationModel;
