let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/', (req, res) => {
Controllers.postController.getPosts(res);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.postController.createPosts(req.body, res);
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePosts(req, res)
    })
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePosts(req, res)
    })

    router.get('/:uid', (req, res) => {
        Controllers.postController.getUserPosts(req, res)
        })
module.exports = router;