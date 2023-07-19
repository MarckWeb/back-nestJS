import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type ReservasDocument = Reservas & Document

@Schema()
export class Reservas {
   @Prop({unique:true})
    nReserva: number

    @Prop({unique:true})
    nVuelo: number

    @Prop()
    namePassenger: string

    @Prop()
    dniPassenger: string

    @Prop()
    dateReservation: string

    @Prop()
    origin: string

    @Prop()
    destination: string

    @Prop()
    dateFlight: string

    @Prop()
    timeFlight: string

    @Prop()
    nAsiento: number

    @Prop()
    price: string
}

export const reservasSchema = SchemaFactory.createForClass(Reservas);