import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { constants } from './constants';

@Module({
    imports: [UsuarioModule, PassportModule, 
    JwtModule.register({
        secret: constants.jwtSecret,
        signOptions: { expiresIn: '300s'},
    })],
    providers: [AuthService, LocalStrategy],
    controllers:[AuthController],
    exports: [AuthService]
})
export class AuthModule {}
