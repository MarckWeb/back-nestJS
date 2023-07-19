import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AsientosDocument = Asientos & Document

@Schema()
export class Asientos {
    @Prop({unique:true})
    nAsientos:number;

    @Prop()
    status: string;

}

export const asientosSchema = SchemaFactory.createForClass(Asientos); 