const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');

const route = express.Router();
let Blog = require('../models/blogModel');

/* Blog Routes */
// Index
route.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('blog/blogs', { blogs: blogs });
        }
    });
});

// New
route.get('/new', (req, res) => {
    res.render('blog/new');
});

// Create
route.post('/', (req, res) => {
    req.body.blog.content = req.sanitize(req.body.blog.content);
    Blog.create(req.body.blog, (err, createdBlog) => {
        if (err) {
            console.log(err);
        } else {
            console.log(createdBlog);
            res.redirect('/blogs');
        }
    })
});

// Show
route.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.render('blog/show', { blog: foundBlog });
        }
    });
});

// Edit
route.get('/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs/' + foundBlog._id);
        } else {
            res.render('blog/edit', { blog: foundBlog });
        }
    });
});

// Update
route.put('/:id', (req, res) => {
    req.body.blog.content = req.sanitize(req.body.blog.content);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/blogs/' + updatedBlog._id);
        }
    })
});

// Delete
route.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/blogs');
            console.log(deletedBlog);
        }
    });
});

module.exports = route;