import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const redCarpet = await ItemModel.find({type:'redcar'});
    res.send(redCarpet);
  }
))



router.get("/:redCarpetId", asyncHandler(
  async (req, res) => {
    const redCarpets = await ItemModel.findById(req.params.redCarpetId);
    res.send(redCarpets);
  }
))



export default router;
