import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Headline } from './headline.model';

@Injectable()
export class ApiService {
  private headlines: Headline[] = [];
  constructor(
    @InjectModel('Headline') private readonly headlineModel: Model<Headline>,
  ) {}

  async getHeadlines(page: number, count: number, isSortAsc: boolean) {
    try {
      const response = await this.headlineModel
        .find()
        .sort([
          ['date', isSortAsc ? 1 : -1],
          ['site', 1],
        ])
        .skip(count * (page - 1))
        .limit(count);
      console.log('number of headlines fetched: ', response.length);
      const headlines = { headlines: response };
      return headlines;
    } catch (err) {
      console.log(err);
    }
  }
}
