import Mongoose from "mongoose";

const RealtorSchema = new Mongoose.Schema({
    "name":{
        type: String,
        required: "Name is required"
    },
    "email_id":{
        type: String,
        required: "Email Id is required"
    },
    "phone":{
        type: String,
        required: "Phone Number is required"
    },
    "description":{
        type: String,
    },
    "image":{
        type:String,
        default:null
    }
},
{
    versionKey: false
});

RealtorSchema.virtual('id',()=>this._id.toHexString());
RealtorSchema.set('toJSON', {virtuals:true});

const Realtor=Mongoose.model('Realtor',RealtorSchema);

export default Realtor;
