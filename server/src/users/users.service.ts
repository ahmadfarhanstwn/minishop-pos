import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository : Repository<Users>,
    ){}

    findOne(business_id : number, user_id : number) : Promise<Users> {
        return this.usersRepository.findOneBy({business_id, user_id})
    }

    findAll(business_id : number) : Promise<Users[]> {
        return this.usersRepository.find({where: {business_id}})
    }

    /*TODO : 
        insert one
        update active status
        update full_name
        update username
        update password
    */

}
