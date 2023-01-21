import cors from 'cors';
import express from 'express';
import { example_weddingStage, sample_users } from './data';
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());
app.use(cors({
  credentials:true,
  origin:["http://localhost:4200"]
}));


app.get("/api/wedding", (req, res) => {
  res.send(example_weddingStage);
})

app.get("api/wedding/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const stages = example_weddingStage.filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  res.send(stages);

})

app.get("/api/wedding/:productId", (req, res) => {
  const productId = req.params.productId;
  const products = example_weddingStage.find(stage => stage.id == productId);
  res.send(products);
})

app.post("/api/users/login", (req, res) => {
  const {email, password} =req.body;
  const user = sample_users.find(user => user.email === email && user.password === password);

  if(user){
    res.send(generateTokenResponse(user));
  }else{
    res.status(400).send("User name or password is invalid. Please try again.")
  }
})

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  },"someRandomText", {
    expiresIn:"30d"
  });

  user.token =token;
  return user;

}

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:"+ port);
})
