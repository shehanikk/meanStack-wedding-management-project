import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const balloon = await ItemModel.find({type:'balloon'});
    res.send(balloon);
  }
))



router.get("/:balloonId", asyncHandler(
  async (req, res) => {
    const balloons = await ItemModel.findById(req.params.balloonId);
    res.send(balloons);
  }
))



export default router;
