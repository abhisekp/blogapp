import fetch from 'node-fetch';
import url from 'url';
import api from '../src/api/api';

const port = api.get('port');
let server;

const getUrl = pathname => url.format({
  hostname: api.get('host') || 'localhost',
  protocol: 'http',
  port: api.get('port'),
  pathname,
});

beforeAll((done) => {
  api
    .get('mongooseClient')
    .connection.dropDatabase()
    .then(() => {
      server = api.listen(port, done);
    });
});

afterAll((done) => {
  api
    .get('mongooseClient')
    .connection.dropDatabase()
    .then(() => {
      server.close(done);
    });
});

describe('Feathers application tests', () => {
  test('Default route does not exist', async () => {
    const actual = await (await fetch(getUrl('/'))).json();
    expect(actual).toMatchSnapshot();
  });
});
