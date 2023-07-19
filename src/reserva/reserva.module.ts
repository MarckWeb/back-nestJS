import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservas, reservasSchema } from './reserva.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reservas.name,
        schema:  reservasSchema
      }
    ])
  ],
  controllers: [ReservaController],
  providers: [ReservaService]
})
export class ReservaModule {}
