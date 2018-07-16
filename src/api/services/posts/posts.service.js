// Initializes the `posts` service on path `/posts`
import createService from 'feathers-mongoose';
import createModel from '../../models/posts.model';
import hooks from './posts.hooks';

export default (app) => {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/posts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('posts');

  service.hooks(hooks);
};
