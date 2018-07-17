import api from '../../src/api';
import userData from '../__fixtures__/user';

describe("'posts' service", () => {
  const postService = api.service('posts');
  const usersService = api.service('users');

  let user;

  beforeAll(async () => {
    [user] = await usersService.find({
      paginate: false,
      query: {
        username: userData.username,
      },
    });

    if (user) {
      return;
    }

    user = await usersService.create(userData);
  });

  it('should register the service', () => {
    expect(postService).toBeTruthy();
  });

  it('should create a post', async () => {
    // eslint-disable-next-line no-underscore-dangle
    const params = { provider: 'rest', user };
    const actual = await postService.create(
      {
        text: 'Happy go lucky!',
      },
      params,
    );

    const expected = {
      text: 'Happy go lucky!',
    };

    expect(actual).toMatchObject(expected);
  });
});
