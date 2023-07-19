import { Delete, HttpCode, Injectable, Param } from '@nestjs/common';
import { UsuarioDocument, Usuarios } from './usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuariosDto } from './dtos/createUsuario.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsuarioService {

    constructor(@InjectModel(Usuarios.name) private readonly usuarioModel: Model<UsuarioDocument>){}

    async getOne(username: string): Promise<Usuarios> {
        console.log('3-.user service getOne')
        return await this.usuarioModel.findOne({username:username}).lean()
    };

    async getUsuariosAll(): Promise<Usuarios[]>{
        return await this.usuarioModel.find()
    }
    
   // db.usuarios.findOne({username: 'davis'})
    async getUser(username:string): Promise<any>{
        return await this.usuarioModel.findOne({username})
    }


    async insertUsuario(body:CreateUsuariosDto){
        console.log('recibiendo en user.service')
    
        let userAll = await this.usuarioModel.countDocuments()

        //va ser a el mismo pero voy a reescribir 
        //body = {...body, id:userAll};
        const plainToHash = await bcrypt.hash(body.password, 10)
        console.log(plainToHash)
        
        const newBody = {
            id: userAll,
            name: body.name,
            username: body.username,
            lastname: body.lastname,
            email: body.email,
            password: plainToHash
        }
        console.log(newBody)
         const createUser = this.usuarioModel.create(newBody)
        
         console.log(await createUser)
        
         console.log('devolviendo a controllers')
         return await createUser

        
    }

    deleteUsuario(id: number) {
        const deleteMartillos = this.usuarioModel.deleteOne({ id });
        return deleteMartillos
    }
}
    

