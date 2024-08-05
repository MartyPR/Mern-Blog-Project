const express =require('express');
const { CreatePost } = require('../../controllers/Post/PostCtrl');

const postRoute= express.Router();

postRoute.post('/create',CreatePost);

module.exports= postRoute