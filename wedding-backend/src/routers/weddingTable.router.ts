import {Router} from 'express';
import { example_weddingStage } from '../data';
import asyncHandler from 'express-async-handler';
import { Item, ItemModel } from '../models/wedding.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();


router.get("/", asyncHandler(
  async (req, res) => {
    const table = await ItemModel.find({type:'table'});
    res.send(table);
  }
))



router.get("/:tableId", asyncHandler(
  async (req, res) => {
    const tables = await ItemModel.findById(req.params.tableId);
    res.send(tables);
  }
))



export default router;
