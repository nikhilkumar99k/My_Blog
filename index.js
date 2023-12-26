import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "Node Express Blog: RESTful Insights Unleashed!",
    content:
      "Today marks the inception of my blog journey. I've crafted this platform using Node and Express.js, implementing all the cool concepts of RESTful APIs. Excited to share insights, experiences, and discoveries. Join me on this digital expedition where ideas unfold and conversations flourish. Welcome to a world of knowledge and connection!.",
    author: "Nikhil Kumar",
    date: "2023-12-26T14:45:58.199Z",
  },
  {
    id: 2,
    title: "NSUT'23 Grad: Coding Enthusiast Unleashes Skills!",
    content:
       "NSUT'23 BTech graduate with expertise in Data Structures, Algorithms, C++, Node.js, Express.js, HTML, CSS, JavaScript, SQL, and DBMS. Eager to share insights and experiences in the dynamic world of tech. Let's delve into the coding journey together!",
    author: "Nikhil Kumar",
    date: "2023-12-26T14:55:18.021Z",
  },
  {
    id: 3,
    title: "Journey into Code",
    content: 
       "Embarking on a coding odyssey, I\'ve triumphed over 2,000 challenges on platforms like LeetCode, HackerRank, GFG, CodeStudio, and Codeforces. I hold a 6-Star Coder status in DSA and a 5-Star Coder in C++ Programming on HackerRank. Additionally, I\'ve achieved LeetCode\'s prestigious 3-Star Coder status. Dive into my portfolio to explore the details of this exhilarating coding expedition! Portfolio Link: https://linktr.ee/nikhilkumar_99k",
    author: "Nikhil Kumar",
    date: "2023-12-26T15:30:27.665Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts",(req, res)=>{
  console.log(posts);
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id",(req, res)=>{
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if(!post){
    return res.status(404).json({ message: `Post having id: ${parseInt(req.params.id)} not found` });
  }
  res.json(post);
});

//CHALLENGE 3: POST a new post
app.post("/posts",(req, res)=>{
  lastId++;
  const post = {
    id: lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  }
  posts.push(post);
  res.status(201).json(post);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id",(req, res)=>{
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if(!post){
    return res.status(404).json({ message: `Post having id: ${parseInt(req.params.id)} not found` });
  }
  if(req.body.title) post.title=req.body.title;
  if(req.body.content) post.content=req.body.content;
  if(req.body.author) post.author=req.body.author;

  res.json(post);
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id",(req, res)=>{
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if(index===-1){
    return res.status(404).json({ message: `Post having id: ${parseInt(req.params.id)} not found` });
  }
  posts.splice(index,1);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
