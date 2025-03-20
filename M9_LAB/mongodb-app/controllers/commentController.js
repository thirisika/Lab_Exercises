"use strict";
let Models = require("../models"); // matches index.js
const getComments= (res) => {
  // finds all users
  Models.Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createComments = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComments = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteComments = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserComments = (req, res) => {
    // finds all posts for a given user and populates with user details
    Models.Comment.find({userId: req.params.uid}).populate({path: 'userId'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
    });
    };

    const getPostComments = (req, res) => {
        // finds all posts for a given user and populates with user details
        Models.Comment.find({postId: req.params.pid}).populate({path: 'postId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
        };
module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
  getUserComments,
  getPostComments
};
