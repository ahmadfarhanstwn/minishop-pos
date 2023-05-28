import { Injectable } from '@nestjs/common';
import { Business } from './entities/business.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateBusinessDto } from './dto/create_business.dto';

@Injectable()
export class BusinessService {
    constructor(
        private dataSource : DataSource
    ){}

    async GetIdByBusinessUsername(username : string) : Promise<number>
    {
        return await this.dataSource.createQueryBuilder().
            select('id').
            from(Business, 'business').
            where('business.business_username = :username', {username}).
            getRawOne()
    }

    async CreateBusiness(createBusinessDto : CreateBusinessDto) : Promise<any>
    {
        await this.dataSource.createQueryBuilder().
            insert().
            into(Business).
            values({
                business_username: createBusinessDto.business_username,
                business_email: createBusinessDto.business_email,
                business_name: createBusinessDto.business_name,
            }).
            execute()
    } 

    async IsUsernameExist(username : string) : Promise<boolean>
    {
        const count = await this.dataSource.createQueryBuilder().
                        select().
                        from(Business, 'business').
                        where('business.business_username = :username', {username}).
                        getCount()

        return count > 0
    }

    async IsEmailExist(email : string) : Promise<boolean>
    {
        const count = await this.dataSource.createQueryBuilder().
                        select().
                        from(Business, 'business').
                        where('business.business_email = :email', {email}).
                        getCount()

        return count > 0
    }
}
