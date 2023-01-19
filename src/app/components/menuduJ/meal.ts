import { ingrediends } from "./ingredients";

export class meal {
    id!: Number;
    label!: string;
    priceDF!: Number;
    availableForWeeksAndDays!:Number;
    category!:Number;
    ingredients!:Array<ingrediends>
    status!:Number;
}