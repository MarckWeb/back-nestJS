import { Injectable } from '@nestjs/common';
import { Asientos } from './asientos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AsientosService {

    constructor(@InjectModel(Asientos.name) private readonly asientosModel: Model<Asientos>){}

    async getAsientosAll(): Promise<Asientos[]>{
        return await this.asientosModel.find()
    }

    async createAsientos(body:any){
        console.log('recibiendo en user.service')
    
        let asientosAll = await this.asientosModel.countDocuments()
        
        const newBody = {
            nAsientos: asientosAll,
            status: body.status,
            
        }
        console.log(newBody)
         const createUser = this.asientosModel.create(newBody)
        

         return await createUser

        
    }

//db.asientos.updateOne({nAsientos:12}, {$set:{status:'libre'}})
    async updateAsiento(nAsiento: number, body: any ){
        console.log(nAsiento)
        console.log('body service')
        console.log(body)
        console.log('retornando')
        return await this.asientosModel.updateOne({nAsientos: nAsiento}, {status: body.status = 'ocupado'})
    }
}
