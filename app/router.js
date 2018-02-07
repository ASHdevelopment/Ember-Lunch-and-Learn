import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
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
