import { Min } from "class-validator";

export class CreateProductDTO {
    name: string;
    @Min(0)
    price: number;
    category_id: string;
}
