import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";


const VariantSchema = new Schema<TVariant>({
    type: String,
    value: String,
})
const inventorySchema = new Schema<TInventory>({
    quantity: Number,
  inStock: Boolean
})

const ProductSchema = new Schema<TProduct>({
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

})

const Product = model("Product", ProductSchema)