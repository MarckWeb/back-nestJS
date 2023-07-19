import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    //constructor para llamar al authService
    constructor(private readonly authService: AuthService){}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){
        console.log('4-. login en autocontroller')
        return this.authService.login(req.body)
    }
    

}
