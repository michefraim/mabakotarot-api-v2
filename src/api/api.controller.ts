import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('headlines')
  async getHeadlines(
    @Query('page') page: number,
    @Query('count') count: number,
    @Query('isSortAsc') isSortAsc: boolean,
  ) {
    return this.apiService.getHeadlines(+page, +count, isSortAsc);
  }
}
