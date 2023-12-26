# My_Blog
# Node Express Blog API

This is a simple Node.js and Express.js API for managing a blog. The API supports basic CRUD operations (Create, Read, Update, Delete) for blog posts. It utilizes in-memory data storage for simplicity.

## Getting Started

### Installation
- Clone the repository: `git clone <repository-url>`
- Install dependencies: `npm install`

### Run the Server
- Run the server: `npm start`
- The API will be accessible at [http://localhost:4000](http://localhost:4000)

## Endpoints

### 1. GET All Posts

- **Endpoint:** `/posts`
- **Method:** GET
- **Description:** Retrieve all blog posts.
- **Example:**
  ```bash
  curl http://localhost:4000/posts

### 2. GET a Specific Post by ID
- **Endpoint:** /posts/:id
- **Method:** GET
- **Description:** Retrieve a specific blog post by its ID.
- **Example:**
  ```bash
  curl http://localhost:4000/posts/1

### 3. POST a New Post
- **Endpoint:** /posts
- **Method:** POST
- **Description:** Create a new blog post.
- **Example:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "content": "This is a new post.", "author": "John Doe"}' http://localhost:4000/posts

### 4. PATCH a Post (Update)
- **Endpoint:** /posts/:id
- **Method:** PATCH
- **Description:** Update a specific blog post by its ID.
- **Example:**
  ```bash
  curl -X PATCH -H "Content-Type: application/json" -d '{"title": "Updated Title"}' http://localhost:4000/posts/1

### 5. DELETE a Specific Post by ID
- **Endpoint:** /posts/:id
- **Method:** DELETE
- **Description:** Delete a specific blog post by its ID.
- **Example:**
  ```bash
  curl -X DELETE http://localhost:4000/posts/1

## Data Format
### Blog Post Object:
- **id:** Unique identifier for the post.
- **title:** Title of the blog post.
- **content:** Content of the blog post.
- **author:** Author of the blog post.
- **date:** Date and time when the post was created.
  
## Dependencies
- Express.js: Web framework for Node.js.
- Body-parser: Middleware to parse incoming request bodies.

![sssssss](https://github.com/nikhilkumar99k/My_Blog/assets/91065041/97ab2fb6-0cb9-4ed9-9305-a0f80bf6c59d)
