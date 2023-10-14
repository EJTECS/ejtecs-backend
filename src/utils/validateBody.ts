import { plainToInstance } from "class-transformer";
import { validateSync, ValidationError } from "class-validator";

export function validateBody(schema: any, value: object): ValidationError[] {
    const parsedValue = plainToInstance<any, object>(schema, value);

    return validateSync(parsedValue);
}
