const mongoose = require('mongoose');
let Blog = require('./models/blogModel');

let blogs =
    [
        {
            title: 'Blog 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non enim praesent elementum facilisis. Dictum varius duis at consectetur lorem donec massa sapien. Duis ut diam quam nulla porttitor massa id.',
        },
        {
            title: 'Blog 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non enim praesent elementum facilisis. Dictum varius duis at consectetur lorem donec massa sapien. Duis ut diam quam nulla porttitor massa id.',
        },
        {
            title: 'Blog 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non enim praesent elementum facilisis. Dictum varius duis at consectetur lorem donec massa sapien. Duis ut diam quam nulla porttitor massa id.',
        },
        {
            title: 'Blog 4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Non enim praesent elementum facilisis. Dictum varius duis at consectetur lorem donec massa sapien. Duis ut diam quam nulla porttitor massa id.',
        }
    ];


function seedDatabase() {
    Blog.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        }
        blogs.forEach((blog) => {
            Blog.create(blog, (err, newBlog) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(newBlog);
                }
            });
        });
    });
}

module.exports = seedDatabase;