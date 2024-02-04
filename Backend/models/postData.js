const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        required: false
    },
    genre: {
        type: String,
        required: true
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "FreedomHerReply",
        default: []
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "FreedomHerUser",
    },
    profileImage: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
    },

}, {timestamps: true});

const postData = mongoose.model('FreedomHerPost', postSchema);
module.exports = postData;