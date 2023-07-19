import { Module } from '@nestjs/common';
import { AsientosService } from './asientos.service';
import { AsientosController } from './asientos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asientos, asientosSchema } from './asientos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Asientos.name,
        schema: asientosSchema
      }
    ])
  ],

  providers: [AsientosService],
  controllers: [AsientosController],
  exports: [AsientosService]
})
export class AsientosModule { }
