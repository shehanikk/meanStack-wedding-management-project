import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const partyDj = await ItemModel.find({type:'partyDj'});
    res.send(partyDj);
  }
))



router.get("/:partyId", asyncHandler(
  async (req, res) => {
    const partyDjs = await ItemModel.findById(req.params.partyId);
    res.send(partyDjs);
  }
))



export default router;
