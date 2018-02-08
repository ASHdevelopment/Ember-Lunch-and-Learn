import Ember from 'ember';

const {
    get
} = Ember

export default Ember.Component.extend({
    tagName:'li',
    classNameBindings:['showDetails:showingDetails'],
    showDetails:false,
    actions:{
        toggleDetails(){
            this.toggleProperty('showDetails')
        },
        toggleFav(name){
            //pass the closure action all the way up through nested components to the parent controller
            get(this, 'favoriteToggled')(name);
        },
        increasePrice(name){
            //pass the closure action all the way up through nested components to the parent controller
            get(this, 'priceInc')(name);
        },
        decreasePrice(name){
            //pass the closure action all the way up through nested components to the parent controller
            get(this, 'priceDec')(name);
        },
    }
});
