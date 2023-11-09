import mongoose, { Schema } from 'mongoose';

const weatherSchema = new Schema({
  city: String,
  temperature: Number,
  moisture: Number,
  windSpeed: Number,
});

const Weather = mongoose.model('Weather', weatherSchema);

export { Weather };
