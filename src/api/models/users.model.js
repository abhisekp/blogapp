export default (app) => {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    username: {type: String, unique: true, required: true},
    password: { type: String },
  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
