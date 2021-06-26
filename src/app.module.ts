import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import * as dotenv from 'dotenv';
dotenv.config();
const MONGO_URI: any = process.env.MONGO_URI;

@Module({
  imports: [ApiModule, MongooseModule.forRoot(MONGO_URI)],
})
export class AppModule {}
