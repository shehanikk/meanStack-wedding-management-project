import cors from 'cors';
import express from 'express';
import { example_weddingStage } from './data';


const app = express();
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

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:"+ port);
})
