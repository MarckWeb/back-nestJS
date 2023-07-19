import { Injectable, NotFoundException } from '@nestjs/common';
import { Reservas } from './reserva.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservasDtos } from './dtos/createReserva.dtos';


@Injectable()
export class ReservaService {

    constructor(@InjectModel(Reservas.name) private readonly reservasModel: Model<Reservas>) { }

    async getReservasAll(): Promise<Reservas[]> {
        return await this.reservasModel.find()
    }

    async getReservasUser({ nameuser }: { nameuser: string; }): Promise<Reservas[]> {
        return await this.reservasModel.find({namePassenger: nameuser})
    }

    async insertReserva(body: CreateReservasDtos) {
        try{
            let reservaAll = await this.reservasModel.countDocuments()

        const newBody = {
            nReserva: reservaAll,
            nVuelo: reservaAll * 2,
            
            namePassenger: body.namePassenger,
            dniPassenger: body.dniPassenger,
            dateReservation: body.dateReservation,
            origin: body.origin,
            destination: body.destination,
            dateFlight: body.dateFlight,
            timeFlight: body.timeFlight,
            nAsiento: body.nAsiento,
            price: body.price

        }

        const createReserva = this.reservasModel.create(newBody)
        return await createReserva
        }catch(e){
            console.log(e)
            throw new NotFoundException()
        }
        
    }

    async updateReserva(dni: string, body: CreateReservasDtos) {
        return this.reservasModel.updateOne({ dni }, body)
    }

    async deleteReserva(dni: string) {
        return await this.reservasModel.deleteOne({ dni });

    }
}


//tenemos listo las reseervas seguir:
//token
//bcrypt
