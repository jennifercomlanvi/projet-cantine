import { meal } from './meal';

export class MenuDJ {
    id!: number;
    label!: string;
    priceDF!: number;
    meals!: Array<meal>;
    imageId!:number;
    availableForWeeksAndDays!:number;
    status!:number;
}