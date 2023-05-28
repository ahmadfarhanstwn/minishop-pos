import { IsString, IsNotEmpty } from "class-validator";

export class SignInDTO{
    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    @IsString()
    password : string;

    @IsNotEmpty()
    @IsString()
    business_name : string;
}