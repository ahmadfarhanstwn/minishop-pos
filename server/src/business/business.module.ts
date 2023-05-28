import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  providers: [BusinessService]
})
export class BusinessModule {}
