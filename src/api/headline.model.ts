import * as mongoose from 'mongoose';

export const HeadlineSchema = new mongoose.Schema({
  site: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export interface Headline {
  id: string;
  site: string;
  date: string;
  fileName: string;
  imageUrl: string;
}
