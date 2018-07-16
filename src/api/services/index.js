import users from './users/users.service';
import posts from './posts/posts.service';

export default (app) => {
  app.configure(users);
  app.configure(posts);
};
