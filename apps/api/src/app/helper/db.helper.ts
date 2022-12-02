import * as mongoose from 'mongoose';

export class DBHelper {
    static init(): void {
        mongoose.connect('mongodb://localhost:27017/')
            .then(() => console.log('DB connection is successfull'))
            .catch((e: Error) => console.log('could not connect to mongo \n\n${e}'));
    }
}
