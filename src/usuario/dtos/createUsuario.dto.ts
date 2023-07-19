import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUsuariosDto {
    
    id: number;
    
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
   @IsNotEmpty()
    password: string;
}