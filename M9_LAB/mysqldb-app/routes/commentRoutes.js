const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

router.get("/user/:uid", (req, res) => {
    Controllers.commentController.getUserComments(req,res);
  });

  router.get("/post/:pid", (req, res) => {
    Controllers.commentController.getPostComments(req,res);
  });
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  Controllers.commentController.createComments(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
    Controllers.commentController.updateComments(req, res)
})
    // matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComments(req, res)
    })
module.exports = router;
