import { Router } from "express";
import aysnceHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { Item, ItemModel } from "../models/wedding.model";

const router = Router();


router.get("/", aysnceHandler(
  async (req, res) => {
    const product = await ItemModel.find();
    console.log(product);

    res.send(product);
  }
))

router.get("/:productid" , aysnceHandler(
  async (req, res) => {
    const product = await ItemModel.findById(req.params.productid);
    console.log(product);
    res.send(product);
  }
))

router.post('/addItem' , aysnceHandler(
  async(req, res ) => {
    const {name, price,image,type} = req.body;
    try {
      const newProduct:Item = {
        id: '',
        name,
        price,
        image,
        type,
      }
      await ItemModel.create(newProduct);
      res.status(201).json({
        msg:'success'
      })
    } catch (error) {
      res.status(HTTP_BAD_REQUEST).send();

    }

  }
))

router.put('/updateProduct/:id', aysnceHandler (
  async (req, res) => {
    const {name, price,image,type} = req.body;
    const id = req.params.id;
    res.send();

    const newProduct = {
      name,
      price,
      image,
      type
    }

    await ItemModel.findByIdAndUpdate(id,newProduct);
  }
))

router.route('/:id').delete((req, res) => {
  ItemModel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});



export default router;
