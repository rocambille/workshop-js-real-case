const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "post" as configuration
    super({ table: "post" });
  }

  // The C of CRUD - Create operation

  async create(post) {
    // Execute the SQL INSERT query to add a new post to the "post" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, content) values (?, ?)`,
      [post.title, post.content]
    );

    // Return the ID of the newly inserted post
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific post by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the post
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all posts from the "post" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of posts
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing post

  // async update(post) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an post by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = PostManager;
