import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: "Please enter email address",
        max: 255
    }, 
    password: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    token: {
        type: String
    }

}, {
    versionKey: false
});

UserSchema.virtual('id', () => this._id.toHexString());
UserSchema.set('toJSON', { virtuals: true });

const User = Mongoose.model('User', UserSchema);

export default User;