import { Injectable } from '@nestjs/common';
import { SignInDTO } from './signin.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService : UsersService){}

    // async SignIn(signInDTO : SignInDTO) : Promise<any>
    // {

    //     const user = this.usersService.findOneByUsername(, signInDto.username)
    // }
}
