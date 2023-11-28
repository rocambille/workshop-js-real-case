// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all posts from the database
    const posts = await tables.post.readAll();

    // Respond with the posts in JSON format
    res.json(posts);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific post from the database based on the provided ID
    const post = await tables.post.read(req.params.id);

    // If the post is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the post in JSON format
    if (post == null) {
      res.sendStatus(404);
    } else {
      res.json(post);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the post data from the request body
  const post = req.body;

  try {
    // Insert the post into the database
    const insertId = await tables.post.create(post);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted post
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
