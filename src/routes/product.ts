import { Router } from "express";
import { CreateProductDTO } from "../dto/product.js";
import { validationMiddleware } from "./middlewares.js";
import { TypedRequest } from "../utils/expressTyping.js";
import ProductService from "../service/product.js";
import { Product } from "../model/product.js";

const router = Router();

router.post(
    "/product",
    validationMiddleware(CreateProductDTO),
    async (req: TypedRequest<CreateProductDTO>, res) => {
        const { body } = req;
        const createdProduct = await ProductService.create(
            Product.toDomain(body),
        );
        res.send(createdProduct).status(202);
    },
);

export default router;
