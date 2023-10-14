import { Product } from "../model/product.js";
import ProductRepository from "../repository/products.js";

class ProductService {
    async create(product: Product) {
        return await ProductRepository.create(product);
    }
}

export default new ProductService();
