import { createClient } from "./index.js";
import { Db } from "mongodb";
import { Product } from "../model/product.js";
import Collections from "./collections.js";

class ProductRepository {
    constructor() {
        this.db = createClient();
    }
    private readonly db: Db;
    async create(product: Product): Promise<Product> {
        const collection = this.db.collection(Collections.PRODUCT);
        await collection.insertOne(product);
        return product;
    }
}

export default new ProductRepository();
