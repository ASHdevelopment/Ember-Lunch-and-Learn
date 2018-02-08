import Ember from 'ember';

const{
    get,
    isEqual,
    computed
} = Ember;

export default Ember.Controller.extend({
    favorites:computed.filterBy('model', 'favorite'),
    actions:{
        favoriteToggled(name){
            //catch the action from the component and send it to the route
            this.send('toggleFav', name)
        },
        priceInc(name){
            this.send('increasePrice', name)
        },
        priceDec(name){
            this.send('decreasePrice', name)
        }
    }
});
