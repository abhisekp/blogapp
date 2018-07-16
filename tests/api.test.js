import ms from 'ms';
import fetch from 'node-fetch';
import url from 'url';
import api from '../src/api/api';

const port = api.get('port');
let server;

const getUrl = async pathname => url.format({
  hostname: api.get('host') || 'localhost',
  protocol: 'http',
  port: await port,
  pathname,
});

// @TODO fix the server listen error. Check jest test
beforeAll(
  () => new Promise(async (resolve, reject) => {
    server = api.listen(await port, err => (err ? reject(err) : resolve(server)));
  }),
  ms('10s'),
);

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
    expect(actual).toMatchSnapshot('No Default Route Error');
  });
});
