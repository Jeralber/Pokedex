import {IsInt,IsPositive,Min,IsString,MinLength} from "class-validator";
export class CreatePokemonDto {
    @IsInt()
    @IsPositive()
    @Min(1)
    no : number;

    @IsString({message: "el campo debe ser un string"})
    @MinLength(2)
    name: string;
}
