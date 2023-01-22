import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { ItemModel } from '../models/wedding.model';

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
    const stage = await ItemModel.find();
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

export default router;
