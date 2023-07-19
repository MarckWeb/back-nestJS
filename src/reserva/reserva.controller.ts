import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Reservas } from './reserva.schema';
import { ReservaService } from './reserva.service';
import { CreateReservasDtos } from './dtos/createReserva.dtos';

@Controller('reservas')
export class ReservaController {

    constructor(private readonly reservasService: ReservaService) { }

    @Get()
    async getReservasAll(): Promise<Reservas[]> {
        return this.reservasService.getReservasAll();
    }

    @Get(':nameuser')
    async getReservaUser(@Param('nameuser') nameuser:string): Promise<Reservas[]>{
        return await this.reservasService.getReservasUser({nameuser})
    }

    @Post()
    async createReservas(
        @Body() body: CreateReservasDtos) {
            console.log('controllerrr')
            console.log(body)
        const createOne = await this.reservasService.insertReserva(body)
        console.log('el body del controller')
        console.log(createOne)
        console.log('volviendo del swervice para retornar valor')
            return createOne
    }

    @Put(':dni')
    async updateReserva(
        @Param('dni') dni: string,
        @Body() body: CreateReservasDtos) {
        try {
            await this.reservasService.updateReserva(dni, body)

            return 'RESERVA ACTUALIZADO CON EXITO'
        } catch (error) {
            return error
        }

    }

    @Delete(':dni')
    async deleteReservas(@Param('dni') dni: string) {
        return this.reservasService.deleteReserva(dni)
    }



}
