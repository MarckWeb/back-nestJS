import { IsNotEmpty, IsString } from "class-validator";

//Un DTO no es más que una clase o interfaz que define los datos que debemos recibir para trabajar con una entidad.
//son las propiedades que se van a recibir del lado del client
export class CreateVuelosDto {
    
    id: number
    @IsString()
    @IsNotEmpty()
    origin:string;

    @IsString()
    @IsNotEmpty()
    destination: string;

    @IsString()
    @IsNotEmpty()
    dateIda: string;

    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsString()
    @IsNotEmpty()
    price: string;
}