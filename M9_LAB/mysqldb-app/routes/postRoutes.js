const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.get("/user/:uid", (req, res) => {
    Controllers.postController.getUserPosts(req,res);
  });
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  Controllers.postController.createPosts(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
    Controllers.postController.updatePosts(req, res)
})
    // matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePosts(req, res)
    })
module.exports = router;
