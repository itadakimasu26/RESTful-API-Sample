const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.postId);
    res.json(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//create a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (error) {
    console.log(error.message);
  }
});

//delete a post
router.delete("/:postId", async (req, res) => {
  try {
    const deletePost = await Post.remove({
      _id: req.params.postId,
    });
    res.json(deletePost);
  } catch (error) {
    console.log(error.message);
  }
});

// update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) { 
    console.log(error.message);
  }
});

router.get("/weather", (req, res) => {
  res.send("Weather Data!");
});

module.exports = router;
