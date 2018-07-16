import api from '../../src/api';

describe("'users' service", () => {
  test('registered the service', () => {
    const service = api.service('users');

    expect(service).toBeTruthy();
  });
});
