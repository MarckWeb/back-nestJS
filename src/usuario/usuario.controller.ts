import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuariosDto } from './dtos/createUsuario.dto';
import { Usuarios } from './usuario.schema';



@Controller('usuario')
export class UsuarioController {

    constructor (private readonly usuarioService: UsuarioService) {}

    @Get()
    getAll(): Promise<Usuarios[]> {
        return this.usuarioService.getUsuariosAll();
    }

    @Get(':username')
    async getReservaUser(@Param('username') username:string): Promise<Usuarios>{
        return await this.usuarioService.getUser( username)
    }


    @Post()
    async createUsuario(@Body() body: CreateUsuariosDto){
        console.log('estoy en el controller')
        console.log(body)
       await this.usuarioService.insertUsuario(body);
        console.log('ya retorne del service')

        //ENVIO DE ARCHIVO
            // const file = createReadStream(join(process.cwd(), '../client/index.html'));
            //file.pipe(res);
            
        return ({message: `BIENVENIDO. Usuario registrado exitosamente`})
        
    }

    @Delete(':id')
    @HttpCode(204)
    deletemartillos(@Param('id') id: number) {
        console.log(typeof id)
        return this.usuarioService.deleteUsuario(id)
    }

}
