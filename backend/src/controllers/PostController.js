const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");

    return res.send(posts);
  },

  async store(req, res) {
    const { author, description, hashtags, place } = req.body;
    const { filename: image } = req.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });

    return res.json(post);
  }
};
