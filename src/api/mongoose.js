import mongoose from 'mongoose';

export default (app) => {
  mongoose.connect(
    app.get('mongodb'),
    {
      useNewUrlParser: true,
    },
  );
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
