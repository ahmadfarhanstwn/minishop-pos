import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create_business.dto';
import { BusinessService } from './business.service';

@Controller('business')
export class BusinessController {
    constructor(private readonly businessService : BusinessService){}

    @Post('')
    async CreateBusiness(@Body() createBusinessDto : CreateBusinessDto) : Promise<any> {
        const isUsernameExist = await this.businessService.IsUsernameExist(createBusinessDto.business_username)
        if (isUsernameExist){
            throw new HttpException('Username is already exist', HttpStatus.CONFLICT)
        }

        const isEmailExist = await this.businessService.IsEmailExist(createBusinessDto.business_email)
        if (isEmailExist) {
            throw new HttpException("Email is already exist", HttpStatus.CONFLICT)
        }

        return await this.businessService.CreateBusiness(createBusinessDto)
    }
}
