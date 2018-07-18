import { uniqueId } from 'lodash/fp';
import api from '../../src/api';

describe("'users' service", () => {
  const userService = api.service('users');

  let user = {
    _id: null,
    username: uniqueId('abhisekp'),
  };

  afterAll(async () => {
    // eslint-disable-next-line no-underscore-dangle
    await userService.remove(user._id);
  });

  it('should register the service', () => {
    expect(userService).toBeTruthy();
  });

  it('should create a new user', async () => {
    const params = {
      provider: 'rest',
    };
    const actual = await userService.create(
      {
        username: user.username,
      },
      params,
    );

    user = actual;

    const expected = {
      username: user.username,
    };

    expect(actual).toMatchObject(expected);
    expect(actual).toEqual(
      expect.not.objectContaining({
        password: expect.anything(),
      }),
    );
  });
});
