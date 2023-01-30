import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const car = await ItemModel.find({type:'cars'});
    res.send(car);
  }
))



router.get("/:carId", asyncHandler(
  async (req, res) => {
    const cars = await ItemModel.findById(req.params.carId);
    res.send(cars);
  }
))



export default router;
