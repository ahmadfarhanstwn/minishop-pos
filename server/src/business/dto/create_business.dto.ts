import { IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateBusinessDto {
    @IsNotEmpty()
    @IsString()
    business_username : string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    business_email : string;

    @IsNotEmpty()
    @IsString()
    business_name : string;
}