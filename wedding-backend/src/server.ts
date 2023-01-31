import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import weddingRouter from './routers/wedding.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import itemRouter from './routers/item.router';
import weddingTableRouter from './routers/weddingTable.router';
import danceMusicalRouter from './routers/danceMusical.router';
import weddingCarRouter from './routers/weddingCar.router';
import partyDjRouter from './routers/partyDj.router';
import balloonRouter from './routers/balloon.router';
import stageDecoRouter from './routers/stageDeco.router';
import redCarpetRouter from './routers/redCarpet.router';
import orderDetailsRouter from './routers/orderDetails.router';
import {Server} from 'socket.io';
import http = require('http');

dbConnect();

// import { example_weddingStage, sample_users } from './data';
// import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
  credentials:true,
  origin:["http://localhost:4200"]
}));


const serverSocket = http.createServer(app);
const io = new Server(serverSocket, { cors: { origin: '*', },});
app.set('io', io);



app.use("/api/wedding", weddingRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/items", itemRouter);
app.use("/api/weddingTable", weddingTableRouter);
app.use("/api/danceMusical", danceMusicalRouter);
app.use("/api/weddingCar", weddingCarRouter);
app.use("/api/partyDj", partyDjRouter);
app.use("/api/balloon", balloonRouter);
app.use("/api/stageDeco", stageDecoRouter);
app.use("/api/redCarpet", redCarpetRouter);
app.use("/api/orderDetails", orderDetailsRouter);






// app.get("/api/wedding", (req, res) => {
//   res.send(example_weddingStage);
// })

// app.get("api/wedding/search/:searchTerm", (req, res) => {
//   const searchTerm = req.params.searchTerm;
//   const stages = example_weddingStage.filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
//   res.send(stages);

// })

// app.get("/api/wedding/:productId", (req, res) => {
//   const productId = req.params.productId;
//   const products = example_weddingStage.find(stage => stage.id == productId);
//   res.send(products);
// })



// app.post("/api/users/login", (req, res) => {
//   const {email, password} =req.body;
//   const user = sample_users.find(user => user.email === email && user.password === password);

//   if(user){
//     res.send(generateTokenResponse(user));
//   }else{
//     res.status(400).send("User name or password is invalid. Please try again.")
//   }
// })

// const generateTokenResponse = (user: any) => {
//   const token = jwt.sign({
//     email:user.email, isAdmin:user.isAdmin
//   },"someRandomText", {
//     expiresIn:"30d"
//   });

//   user.token =token;
//   return user;

// }

const port = 3000;
var server= serverSocket.listen(port, () => {
  console.log("Website served on http://localhost:"+ port);
})

module.exports = app;
