// Import required dependencies
const { database, tables } = require("../setup");

// Test suite for the create method of PostManager
describe("Create post", () => {
  it("should create an post successfully", async () => {
    // Define a sample post for testing
    const testPost = {
      title: "Sample Post",
      content: "Sample Content",
    };

    // Send a create request to the post table with a test post
    const insertId = await tables.post.create(testPost);

    // Check if the newly added post exists in the database
    const [rows] = await database.query(
      "select * from post where id = ?",
      insertId
    );

    const foundPost = rows[0];

    // Assertions
    expect(foundPost).toBeDefined();
    expect(foundPost.title).toBe(testPost.title);
  });

  it("should throw when passing invalid object", async () => {
    // Thx https://jestjs.io/docs/asynchronous#asyncawait

    // Send a create request to the post table with an empty object
    const promise = tables.post.create({});

    // Assertions
    await expect(promise).rejects.toThrow();
  });
});
