const mongoose = require('mongoose');

let Blog = new mongoose.Schema(
    {
        title: String,
        content: String,
        updated: {type: Date, default: Date.now()},
        image: {type: String, default: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1153&q=80'}
    }
);

module.exports = mongoose.model('Blog', Blog);