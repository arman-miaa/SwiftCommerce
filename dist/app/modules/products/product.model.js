"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: String,
    value: String,
}, { _id: false });
const inventorySchema = new mongoose_1.Schema({
    quantity: Number,
    inStock: Boolean
}, { _id: false });
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [VariantSchema],
    inventory: [inventorySchema]
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
