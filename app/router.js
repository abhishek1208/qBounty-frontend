import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('index', {path: '/'})
    this.route('id', {path: '/:id'});
  });
  this.route('tasks', function() {
    this.route('index', {path: '/'});
    this.route('id', {path: '/:id'});
  });
  this.route('claims');
});

export default Router;
