import api from '../../src/api';

describe("'posts' service", () => {
  test('registered the service', () => {
    const service = api.service('posts');

    expect(service).toBeTruthy();
  });
});
