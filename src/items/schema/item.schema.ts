import * as Mongoose from 'mongoose';

export const ItemSchema = new Mongoose.Schema({
    name :String,
    qty: Number,
    description: String
});
