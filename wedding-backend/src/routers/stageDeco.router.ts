import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const stageDec = await ItemModel.find({type:'stageDec'});
    res.send(stageDec);
  }
))



router.get("/:stageDecId", asyncHandler(
  async (req, res) => {
    const stageDecs = await ItemModel.findById(req.params.stageDecId);
    res.send(stageDecs);
  }
))



export default router;
