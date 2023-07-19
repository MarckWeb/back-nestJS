import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AsientosService } from './asientos.service';
import { Asientos } from './asientos.schema';

@Controller('asientos')
export class AsientosController {
    constructor (private readonly asientosService: AsientosService) {}

    @Get()
    getAll(): Promise<Asientos[]> {
        return this.asientosService.getAsientosAll();
    }

    @Post()
    async createAsientos(@Body() body: any){
        console.log('estoy en el controller')
        console.log(body)
       await this.asientosService.createAsientos(body);
        console.log('ya retorne del service')

        return ({messaje: 'registro del usuario con exitosamente'})
        
    }

    @Put(':nAsiento')
    async updateAsientos(
        @Param('nAsiento') nAsiento: number, @Body()
       body: any) {
        try {
            console.log(nAsiento)
            console.log('body controller')
            console.log(body)
            const retorno = await this.asientosService.updateAsiento(nAsiento, body)
            console.log('entradno del service')
            return retorno
        } catch (error) {
            return error
        }

    }

}
