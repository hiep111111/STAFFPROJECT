import mongoose from 'mongoose';
import DATA_TYPE from '../../Core/constants/dataTypeConstant.js';

const UserSchema = mongoose.Schema({
    Username:{
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
        unique: DATA_TYPE.TRUE,
    },
    Password: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
    },
    Email: {
        type: DATA_TYPE.STRING,
        required: DATA_TYPE.TRUE,
        unique: DATA_TYPE.TRUE,
    },
    Isadmin:{
        type: DATA_TYPE.BOOLEAN,
        default: false, 
    }
},
{
    timestamps: true,
});

const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;
