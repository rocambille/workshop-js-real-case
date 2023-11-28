// Import required dependencies
const { app, request, tables } = require("../setup");

// Test suite for the GET /api/posts route
describe("GET /api/posts", () => {
  it("should fetch posts successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Create a sample post in the database
    const insertId = await tables.post.create(testPost);

    // Send a GET request to the /api/posts endpoint
    const response = await request(app).get("/api/posts");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Check if the created post is present in the response
    const foundPost = response.body.find((post) => post.id === insertId);

    // Assertions
    expect(foundPost).toBeInstanceOf(Object);
    expect(foundPost.title).toBe(testPost.title);
  });
});

// Test suite for the GET /api/posts/:id route
describe("GET /api/posts/:id", () => {
  it("should fetch a single post successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Create a sample post in the database
    const insertId = await tables.post.create(testPost);

    // Send a GET request to the /api/posts/:id endpoint
    const response = await request(app).get(`/api/posts/${insertId}`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.id).toBe(insertId);
    expect(response.body.title).toBe(testPost.title);
  });

  it("should return 404 for non-existent post", async () => {
    // Send a GET request to the /api/posts/:id endpoint with an invalid ID
    const response = await request(app).get("/api/posts/0");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the POST /api/posts route
// Doesn't pass: maybe something to change in app config :/
// Hint: enabling log could help ;)
describe("POST /api/posts", () => {
  it("should add a new post successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Send a POST request to the /api/posts endpoint with a test post
    const response = await request(app).post("/api/posts").send(testPost);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toEqual(expect.any(Number));

    // Check if the newly added post exists in the database
    const foundPost = await tables.post.read(response.body.insertId);

    // Assertions
    expect(foundPost).toBeDefined();
    expect(foundPost.title).toBe(testPost.title);
  });
});

// TODO: implement PUT and DELETE routes

/*
// Test suite for the PUT /api/posts/:id route
describe("PUT /api/posts/:id", () => {
  it("should update an existing post successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Create a sample post in the database
    const insertId = await tables.post.create(testPost);

    // Define an updated post object
    const updatedPost = {
      title: "Updated Post",
    };

    // Send a PUT request to the /api/posts/:id endpoint with updated data
    const response = await request(app)
      .put(`/api/posts/${insertId}`)
      .send(updatedPost);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the post has been updated in the database
    const foundPost = await tables.post.read(insertId);

    // Assertions
    expect(foundPost).toBeDefined();
    expect(foundPost.title).toBe(updatedPost.title);
  });
});

// Test suite for the DELETE /api/posts/:id route
describe("DELETE /api/posts/:id", () => {
  it("should delete an existing post successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Create a sample post in the database
    const insertId = await tables.post.create(testPost);

    // Send a DELETE request to the /api/posts/:id endpoint
    const response = await request(app).delete(`/api/posts/${insertId}`);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the post has been deleted from the database
    const foundPost = await tables.post.read(insertId);

    // Assertions
    expect(foundPost).toBeUndefined();
  });
});
*/
