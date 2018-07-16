/* eslint-disable no-console */
import next from 'next';
import path from 'path';
import getApp from './app';
import logger from './logger';

// eslint-disable-next-line no-global-assign
// Set options as a parameter, environment variable, or rc file.

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.resolve(__dirname, 'client') });
const handle = nextApp.getRequestHandler();

process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason));

export default nextApp.prepare().then(
  () => new Promise((resolve) => {
    const app = getApp(handle);
    const port = app.get('port');

    app.listen(port, () => {
      logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
      resolve(app);
    });
  }),
);
