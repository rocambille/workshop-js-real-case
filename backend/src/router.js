const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import postControllers module for handling post-related operations
const postControllers = require("./controllers/postControllers");

// Route to get a list of posts
router.get("/posts", postControllers.browse);

// Route to get a specific post by ID
router.get("/posts/:id", postControllers.read);

// Route to add a new post
router.post("/posts", postControllers.add);

/* ************************************************************************* */

module.exports = router;
