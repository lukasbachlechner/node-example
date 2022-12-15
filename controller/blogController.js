import Post from "../models/postSchema.js";

const getAll = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

const create = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    // validate!

    const post = await Post.create({
      title,
      content,
      author,
    });
    res.json(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { getAll, create };
