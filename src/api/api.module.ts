import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HeadlineSchema } from './headline.model';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [
    MongooseModule.forFeature([{ name: 'Headline', schema: HeadlineSchema }]),
  ],
})
export class ApiModule {}
