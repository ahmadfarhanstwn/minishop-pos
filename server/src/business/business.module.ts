import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { BusinessController } from './business.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  providers: [BusinessService],
  controllers: [BusinessController]
})
export class BusinessModule {}
