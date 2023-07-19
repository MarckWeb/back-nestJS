import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { CreateVuelosDto } from './dtos/createVuelos.dto';
import { Vuelos } from './vuelos.schema';

@Controller('vuelos')
export class VuelosController {

    constructor(private readonly vuelosService: VuelosService) {}

    @Get()
    async getVuelosAll():Promise<Vuelos[]>{
        return await this.vuelosService.getVuelosAll();
    }

    @Get(':origin')
    async getVuelo(@Param('origin') origin: string): Promise<Vuelos> {
        return await this.vuelosService.getVuelo(origin)
    }

    @Get(':origin/:destination/:date')
    async getVuelos(@Param('origin') origin: string, @Param('destination') destination: string, @Param('date') date: string): Promise<Vuelos> {
        return await this.vuelosService.getVuelos(origin, destination, date)
       
    }

    
    @Post()
    async createVuelos(@Body() body: CreateVuelosDto){
        console.log(body)
        const createOne = await this.vuelosService.insertVuelos(body)
        return createOne
    }

    @Put(':origin')
    async updateVuelo(@Param('origin') origin: string, @Body() body: CreateVuelosDto){
        return await this.vuelosService.updateVuelo(origin, body)
    }
    
    @Delete(':id')
    @HttpCode(204)
    async delteVuelo(@Param('id') id: number){
        return await this.vuelosService.deleteVuelo(id)
    }

}
