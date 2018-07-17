import api from '../../src/api';
import userData from '../__fixtures__/user';

describe("'users' service", () => {
  const userService = api.service('users');

  it('should register the service', () => {
    expect(userService).toBeTruthy();
  });

  it('should create a new user', async () => {
    const params = {
      provider: 'rest',
    };
    const actual = await userService.create(userData, params);

    const expected = {
      username: userData.username,
    };

    expect(actual).toMatchObject(expected);
    expect(actual).toEqual(
      expect.not.objectContaining({
        password: expect.anything(),
      }),
    );
  });
});
