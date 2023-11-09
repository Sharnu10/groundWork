import * as express from 'express';
import * as cors from 'cors';

import { mongooseConnectDB } from './app/connectDB/mongooseConnectDB';
import { config } from './app/config';
import { weatherApp } from './app/routes/weather';

const app = express();
app.use(cors());

// connect to mongodb
mongooseConnectDB();

app.use(weatherApp);

app.listen(config.port, () => {
  console.log(`server running on port: ${config.port}`);
});
