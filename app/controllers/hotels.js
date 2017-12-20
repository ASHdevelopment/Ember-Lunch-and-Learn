import Ember from 'ember';

const{
    computed
} = Ember;

export default Ember.Controller.extend({
    favorites:computed.filterBy('model', 'favorite')
});
