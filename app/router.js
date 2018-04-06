import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('restaurants');
    this.route('hotels');
  
    this.route('orders', function() {
      this.route('new', {path: '/new/:name'});
      this.route('history');
    });
});

export default Router;
