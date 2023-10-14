import { CreateProductDTO } from "../dto/product.js";
import { ObjectId } from "mongodb";

export class Product {
    _id?: ObjectId;
    name: string;
    price: number;
    category_id?: string;

    static toDomain(dto: CreateProductDTO): Product {
        return {
            name: dto.name,
            category_id: undefined,
            price: dto.price,
        };
    }
}
