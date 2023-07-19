import { IsInt, IsString } from "class-validator"


export class CreateReservasDtos {
    
    nReserva: number

    
    nVuelo: number

    @IsString()
    namePassenger: string

    @IsString()
    dniPassenger: string

    @IsString()
    dateReservation: string

    @IsString()
    origin: string

    @IsString()
    destination: string

    @IsString()
    dateFlight: string

    @IsString()
    timeFlight: string

    @IsInt()
    nAsiento: number

    @IsString()
    price: string
}