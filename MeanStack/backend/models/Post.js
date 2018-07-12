import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
});

export default mongoose.model('Post', Post)