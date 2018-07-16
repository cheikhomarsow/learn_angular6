import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('User', User);