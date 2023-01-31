import aysnceHandler from 'express-async-handler';
import { Router } from "express";
import { OrderModel } from '../models/order.model';

const router =Router();
router.get("/", aysnceHandler(
  async (req, res) => {
    const cameras = await OrderModel.find();
    console.log(cameras);

    res.send(cameras);
  }
))


router.get("/:orderid" , aysnceHandler(
  async (req, res) => {
    const product = await OrderModel.findById(req.params.orderid);
    res.send(product);
  }
))

router.route('/:id').delete((req, res) => {
  OrderModel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});



export default router;
