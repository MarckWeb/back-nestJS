import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Usuarios } from "src/usuario/usuario.schema";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super();
    }

    async validate(username:string, password: string): Promise<Usuarios>{
        console.log('1-. validate local strategy')
        const user = await this.authService.validateUsuario(username, password);

        if(!user){
            console.log('entrando en el if de strategy')
            throw new UnauthorizedException();
        }

        return user
    }
}

