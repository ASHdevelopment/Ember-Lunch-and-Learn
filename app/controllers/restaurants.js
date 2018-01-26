import Ember from 'ember';

const{
    get,
    isEqual,
    computed
} = Ember;

export default Ember.Controller.extend({
    favorites:computed.filterBy('model', 'favorite')
});
