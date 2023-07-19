import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type VuelosDocument = Vuelos & Document

@Schema()
export class Vuelos {
    @Prop()
    id: number;

    @Prop()
    origin:string;

    @Prop()
    destination: string;

    @Prop()
    dateIda: string;

    @Prop()
    hora: string;

    @Prop()
    price: string;
}

export const vuelosSchema = SchemaFactory.createForClass(Vuelos)