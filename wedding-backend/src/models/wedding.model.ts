import { model, Schema } from "mongoose";

export interface Item{
  id: string;
  image: string;
  name: string;
  price: number;

}

export const ItemSchema = new Schema<Item>(
  {
    name: {type: String, required:true},
    price: {type: Number, required:true},
    image: {type: String, required:true}

  },{
    toJSON:{
      virtuals: true
    },
    toObject:{
      virtuals: true
    },
    timestamps:true
  }
);

export const ItemModel = model<Item>('items', ItemSchema);
