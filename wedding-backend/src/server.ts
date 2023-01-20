import cors from 'cors';
import express from 'express';


const app = express();
app.use(cors({
  credentials:true,
  origin:["http://localhost/4200"]
}));


app.get("/api/wedding", (req, res) => {
  res.send("send");
})

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:"+ port);
})
