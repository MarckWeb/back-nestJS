import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VuelosModule } from './vuelos/vuelos.module';
import { ReservaModule } from './reserva/reserva.module';
import { AuthModule } from './auth/auth.module';
import { AerolineasController } from './aerolineas/aerolineas.controller';
import {  join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AsientosModule } from './asientos/asientos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/reservation'),
  
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','..', 'client'),
    }),

      UsuarioModule,
      VuelosModule,
      ReservaModule,
      AsientosModule,
      AuthModule
    
  ],
  providers: [],
  controllers: [AerolineasController],

})
export class AppModule {}
