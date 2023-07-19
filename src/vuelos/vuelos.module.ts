import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Vuelos, vuelosSchema } from './vuelos.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Vuelos.name,
                schema: vuelosSchema
            }
        ])
    ],
    controllers: [VuelosController],
    providers: [VuelosService]
})
export class VuelosModule {}
