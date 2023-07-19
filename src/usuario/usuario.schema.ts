import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsuarioDocument = Usuarios & Document

@Schema()
export class Usuarios {
    @Prop({unique:true})
    id:number;

    @Prop({unique:true})
    username: string;

    @Prop()
    name: string;

    @Prop()
    lastname: string;

    @Prop({unique:true})
    email: string

    @Prop({unique:true})
    password: string;
}

export const usuarioSchema = SchemaFactory.createForClass(Usuarios); 