import application from './application.route.js';
import auth from './auth.route.js';
import user from './user.route.js';

export default (app) => {
  app.use('/api/applications', application);
  app.use('/api/auths', auth);
  app.use('/api/users', user);
};
