import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import api from './api';
import logger from './logger';

export default (handle) => {
  const app = express(feathers());
  app.configure(configuration());

  // Enable security, CORS, compression, favicon and body parsing
  app.use(helmet());
  app.use(cors());
  app.use(compress());
  app.use(favicon(path.join(app.get('public'), 'favicon.ico')));

  // Register your API sub app
  app.use('/api', api);

  app.get('*', (req, res) => {
    handle(req, res);
  });

  // Configure a middleware for 404s and the error handler
  app.use(express.notFound());
  app.use(express.errorHandler({ logger }));

  return app;
};
