import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'li',
    showDetails:false,
    actions:{
        toggleDetails(){
            this.toggleProperty('showDetails')
        }
    }
});
