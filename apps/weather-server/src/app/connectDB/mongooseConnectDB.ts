import * as mongoose from 'mongoose';
import { config } from '../config';

const mongooseConnectDB = () => {
  mongoose
    .connect(config.database)
    .then((result) => {
      console.log('Mongoose connected to ', result.connections[0].host);
    })
    .catch((error) => {
      console.log('error connecting to db ', error);
    });
};

export { mongooseConnectDB };
