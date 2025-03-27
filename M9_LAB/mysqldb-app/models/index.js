"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
  await Post.sync();
  await Comment.sync();
}

init();

// Sequelize will auto-generate foreign key column names based on the table names
Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
User.hasMany(Comment);

Comment.belongsTo(Post);
Post.hasMany(Comment);

module.exports = {
  User,
  Post,
  Comment, // export the model
  // also export any extra models here
};
