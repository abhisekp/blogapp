import ms from 'ms';
import delay from 'delay';
import fetch from 'node-fetch';
import url from 'url';
import api from '../src/api/api';
import userData from './__fixtures__/user';

const port = api.get('port');
let server;

const getUrl = pathname => url.format({
  hostname: api.get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname,
});

beforeAll(async () => {
  await new Promise((resolve) => {
    server = api.listen(port, resolve);
  });
});

afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

describe('Feathers application tests', () => {
  it('should have no default route', async () => {
    const actual = await (await fetch(getUrl('/'))).json();
    expect(actual).toMatchSnapshot();
  });
});
