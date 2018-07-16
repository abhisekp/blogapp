import api from '../../src/api';

describe("'users' service", () => {
  const userService = api.service('users');

  it('should register the service', () => {
    expect(userService).toBeTruthy();
  });

  it(
    'should create a new user',
    async () => {
      const params = {
        provider: 'rest',
      };
      const actual = await userService.create(
        {
          username: 'abhisekp',
          password: '123456',
        },
        params,
      );

      const expected = {
        username: 'abhisekp',
      };

      expect(actual).toMatchObject(expected);
      expect(actual).toEqual(
        expect.not.objectContaining({
          password: expect.anything(),
        }),
      );
    },
  );
});
