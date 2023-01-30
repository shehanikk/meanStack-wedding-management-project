import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const danceMusical = await ItemModel.find({type:'danceMusical'});
    res.send(danceMusical);
  }
))



router.get("/:danceId", asyncHandler(
  async (req, res) => {
    const danceMusicals = await ItemModel.findById(req.params.danceId);
    res.send(danceMusicals);
  }
))



export default router;
