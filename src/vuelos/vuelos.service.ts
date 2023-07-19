import { Injectable } from '@nestjs/common';
import { CreateVuelosDto } from './dtos/createVuelos.dto';
import { Vuelos } from './vuelos.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VuelosService {
    
    constructor(@InjectModel(Vuelos.name) private readonly vuelosModel) { }

    async getVuelosAll(): Promise<Vuelos[]> {
        return await this.vuelosModel.find();
    }

    async getVuelo(origin:string): Promise<Vuelos>{
        console.log('service vuelos param')
        console.log(origin)
        return await this.vuelosModel.find({origin: origin})
    } 

//db.vuelos.find({origin:'madrid', destination:'bilbao', dateIda: '2023-05-20'})
    async getVuelos(origin: string, destination: string, date: string): Promise<Vuelos>{
        console.log(`enviando ${origin} y ${destination}, ${date}`)
        return await this.vuelosModel.find({origin:origin, destination:destination, dateIda:date})
    }

    async insertVuelos(body: CreateVuelosDto) {
        let vuelosAll = await this.vuelosModel.countDocuments()

        const newBody = {
            id: vuelosAll,
            origin: body.origin,
            destination: body.destination,
            dateIda: body.dateIda,
            hora: body.hora,
            price: body.price,
        }

        const createVuelos = this.vuelosModel.create(newBody)
        return await createVuelos
    }

    updateVuelo(origin: string, body: CreateVuelosDto) {
        return this.vuelosModel.updateOne({origin}, body)
    }

    deleteVuelo(id: number) {
        return this.vuelosModel.deleteOne({id});
    }
}
