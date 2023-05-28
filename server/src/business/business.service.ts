import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from './business.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessService {
    constructor(
        @InjectRepository(Business)
        private businessRepository : Repository<Business>
    ){}

    // async GetIdByBusinessUsername(username : string) : number
    // {
    //     return await
    // }
}
