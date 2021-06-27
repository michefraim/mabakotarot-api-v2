import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('headlines')
  async getHeadlines(
    @Query('page', ParseIntPipe) page: number,
    @Query('count', ParseIntPipe) count: number,
    @Query('isSortAsc', ParseBoolPipe) isSortAsc: boolean,
  ) {
    return this.apiService.getHeadlines(page, count, isSortAsc);
  }
}
