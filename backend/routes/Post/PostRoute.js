const express =require('express');
const { CreatePost, listPosts } = require('../../controllers/Post/PostCtrl');

const postRoute= express.Router();

postRoute.post('/create',CreatePost);
postRoute.get('/list',listPosts);

module.exports= postRoute