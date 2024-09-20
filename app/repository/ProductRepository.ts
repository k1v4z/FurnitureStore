import { products } from "@prisma/client";
import { IRepository } from "../contract/interface/IRepository";
import { Product } from "../helper/MappingType";
import prisma from "@/prisma/db";

export class ProductRepository implements IRepository<Product> {
    getAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }
    create(item: Product): Promise<Product> {

        throw new Error("Method not implemented.");
    }
    updateById(id: string, item: products): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<products> {
        throw new Error("Method not implemented.");
    }

}