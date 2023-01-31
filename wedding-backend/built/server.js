"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var wedding_router_1 = __importDefault(require("./routers/wedding.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var database_config_1 = require("./configs/database.config");
var order_router_1 = __importDefault(require("./routers/order.router"));
var item_router_1 = __importDefault(require("./routers/item.router"));
var weddingTable_router_1 = __importDefault(require("./routers/weddingTable.router"));
var danceMusical_router_1 = __importDefault(require("./routers/danceMusical.router"));
var weddingCar_router_1 = __importDefault(require("./routers/weddingCar.router"));
var partyDj_router_1 = __importDefault(require("./routers/partyDj.router"));
var balloon_router_1 = __importDefault(require("./routers/balloon.router"));
var stageDeco_router_1 = __importDefault(require("./routers/stageDeco.router"));
var redCarpet_router_1 = __importDefault(require("./routers/redCarpet.router"));
var orderDetails_router_1 = __importDefault(require("./routers/orderDetails.router"));
var socket_io_1 = require("socket.io");
var http = require("http");
(0, database_config_1.dbConnect)();
// import { example_weddingStage, sample_users } from './data';
// import jwt from "jsonwebtoken";
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
var serverSocket = http.createServer(app);
var io = new socket_io_1.Server(serverSocket, { cors: { origin: '*' } });
app.set('io', io);
app.use("/api/wedding", wedding_router_1["default"]);
app.use("/api/users", user_router_1["default"]);
app.use("/api/orders", order_router_1["default"]);
app.use("/api/items", item_router_1["default"]);
app.use("/api/weddingTable", weddingTable_router_1["default"]);
app.use("/api/danceMusical", danceMusical_router_1["default"]);
app.use("/api/weddingCar", weddingCar_router_1["default"]);
app.use("/api/partyDj", partyDj_router_1["default"]);
app.use("/api/balloon", balloon_router_1["default"]);
app.use("/api/stageDeco", stageDeco_router_1["default"]);
app.use("/api/redCarpet", redCarpet_router_1["default"]);
app.use("/api/orderDetails", orderDetails_router_1["default"]);
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
// const port = 3000;
// var server= serverSocket.listen(port, () => {
//   console.log("Website served on http://localhost:"+ port);
// })
module.exports = app;
