let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/', (req, res) => {
Controllers.commentController.getComments(res);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.commentController.createComments(req.body, res);
})

router.put('/:id', (req, res) => {
    Controllers.commentController.updateComments(req, res)
    })
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComments(req, res)
    })

router.get('/:uid', (req, res) => {
    Controllers.commentController.getUserComments(req, res)
    })

router.get('/:pid', (req, res) => {
    Controllers.commentController.getPostComments(req, res)
    })
module.exports = router;