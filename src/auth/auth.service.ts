import { Injectable } from '@nestjs/common';
import { Usuarios } from 'src/usuario/usuario.schema';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly usuarioService: UsuarioService, private readonly jwtService: JwtService) {}

    async validateUsuario(username: string, password: string): Promise<any>{
    
        const user = await this.usuarioService.getOne(username);
        let coincidence = bcrypt.compareSync(password, user.password)
        
        if(coincidence){
            const {password, ...result} = user;
            return user
        }
       
        return null
    }

    async login(body: any){
        const payload = {username: body.username, sub: body.userId}

        return {
            acces_token: this.jwtService.sign(payload)
        };
    }
}


//sacar el token 
//empezar con front

