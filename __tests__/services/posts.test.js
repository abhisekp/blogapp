import { uniqueId } from 'lodash/fp';
import api from '../../src/api';
import postsService from '../../src/api/services/posts/posts.service';

describe("'posts' service", () => {
  const postService = api.service('posts');
  const usersService = api.service('users');

  let user = {
    username: uniqueId('abhisekp'),
    _id: null,
  };
  let post = {
    _id: null,
    text: 'Happy go lucky!',
  };

  beforeAll(async () => {
    user = await usersService.create({
      username: user.username,
    });
  });

  afterAll(async () => {
    // eslint-disable-next-line no-underscore-dangle
    await usersService.remove(user._id);
    // eslint-disable-next-line no-underscore-dangle
    await postsService.remove(post._id);
  });

  it('should register the service', () => {
    expect(postService).toBeTruthy();
  });

  it('should create a post', async () => {
    // eslint-disable-next-line no-underscore-dangle
    const params = { provider: 'rest', user };
    const actual = await postService.create(
      {
        text: post.text,
      },
      params,
    );

    const expected = {
      text: post.text,
    };

    post = actual;

    expect(actual).toMatchObject(expected);
  });

  it('should remove a post', async () => {
    // eslint-disable-next-line no-underscore-dangle
    const actual = await postService.remove(post._id);

    const expected = {
      text: post.text,
    };

    post = {};

    expect(actual).toMatchObject(expected);
  });
});
