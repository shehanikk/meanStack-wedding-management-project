import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const itemCount = await ItemModel.countDocuments();
    if(itemCount> 0) {
      res.send("Seed is already done!");
      return;
    }

    await ItemModel.create(example_weddingStage);
    res.send("Seed is done!");
  }
))

router.get("/", asyncHandler(
  async (req, res) => {
    const stage = await ItemModel.find({type:'stage'});
    res.send(stage);
  }
))

// router.get("/search/:searchTerm", asyncHandler(
//   async (req, res) => {
//     const searchRegex = new RegExp(req. params.searchTerm, 'i');
//     const stage = await ItemModel.find({name: {$regex:searchRegex}})
//     res.send(stage);

//   }
// ))

router.get("/:productId", asyncHandler(
  async (req, res) => {
    const products = await ItemModel.findById(req.params.productId);
    res.send(products);
  }
))

router.post('/addItem' , asyncHandler(
  async(req, res ) => {
    const {name, price,image,type} = req.body;
    try {
      const newProduct:Item = {
        id: '',
        name,
        price,
        image,
        type
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

export default router;
