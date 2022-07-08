import express from "express";
import { router } from "./routes";

const server = express();
server.use(express.json());
server.use(router);

server.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});

// create user C
// read user R
// update user U
// delete user D
// CRUD - create, read, update, delete -- api rest
