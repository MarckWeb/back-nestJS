import { Module } from '@nestjs/common';
import { Usuarios, usuarioSchema } from './usuario.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Usuarios.name,
                schema: usuarioSchema
            }
        ])
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuarioModule {}
