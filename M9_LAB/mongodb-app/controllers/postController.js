"use strict";
let Models = require("../models"); // matches index.js
const getPosts= (res) => {
  // finds all users
  Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createPosts = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePosts = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deletePosts = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserPosts = (req, res) => {
    // finds all posts for a given user and populates with user details
    Models.Post.find({userId: req.params.uid}).populate({path: 'userId'})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
    });
    };
module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  getUserPosts
};
