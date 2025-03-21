import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.services";

const createProduct = async (req:Request, res:Response) => {
    try {
        //   console.log(req.body);
        const zodParser = productValidationSchema.parse(req.body);
        const result = await ProductServices.createProductIntoDB(zodParser);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        })
    
  } catch (err:any) {
      res.status(500).json({
          success: false,
          message: err.message || "Somting went wrong",
          error: err
    })
  }
};

export const ProductControllers = {
    createProduct,
}