const express = require('express');
const CommentController = require('../Controller/CommentControler');
const CommentRouter = express.Router();

CommentRouter.get('/', CommentController.getComments);

CommentRouter.get('/user/:userId', CommentController.getCommentsByUserId);

CommentRouter.post('/add', CommentController.addComment);

CommentRouter.put('/update', CommentController.updateComment);

CommentRouter.delete('/delete/:id', CommentController.deleteComment);

module.exports = CommentRouter;