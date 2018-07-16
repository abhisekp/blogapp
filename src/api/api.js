import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';

import logger from './logger';
import middleware from './middleware';
import services from './services';
import apiHooks from './api.hooks';
import channels from './channels';

import authentication from './authentication';

import mongoose from './mongoose';

const api = express(feathers());
api.use(helmet());
api.use(cors());
api.use(compress());

// Load app configuration
api.configure(configuration());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
api.configure(express.rest());
api.configure(socketio());

api.configure(mongoose);

// Configure other middleware (see `middleware/index.js`)
api.configure(middleware);
api.configure(authentication);
// Set up our services (see `services/index.js`)
api.configure(services);
// Set up event channels (see channels.js)
api.configure(channels);

// Configure a middleware for 404s and the error handler
api.use(express.notFound());
api.use(express.errorHandler({ logger }));

api.hooks(apiHooks);

export default api;
