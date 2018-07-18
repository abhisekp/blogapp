export default (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const posts = new Schema(
    {
      text: { type: String, required: true },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('posts', posts);
};
