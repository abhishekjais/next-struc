// const mongoose = ('mongoose');
import mongoose, { Schema, model } from "mongoose"

const ProductSchema = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    image: String,
    price: Number,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.updated;
    return obj;
};

//Export user module
export default mongoose.models.Product || model('Product', ProductSchema);