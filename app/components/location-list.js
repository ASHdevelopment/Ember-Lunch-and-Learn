import Ember from 'ember';

const{
    get,
    isEqual,
} = Ember;

export default Ember.Component.extend({
    actions:{
        //toggle the favorite property of a restaurant
        toggleFav(name){
            const model = get(this, 'locations');
            //loop through each restaurant and if name matches what was passed into the action, toggle the boolean property
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.toggleProperty('favorite')
                }
            })
        },
        increasePrice(name){
            const model = get(this, 'locations');
            //loop through each restaurant and if name matches what was passed into the action, increase the price
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.incrementProperty('price')
                }
            })
        },
        decreasePrice(name){
            const model = get(this, 'locations');
            //loop through each restaurant and if name matches what was passed into the action, decrease the price
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    if(get(r, 'price') > 0) {
                        r.decrementProperty('price');
                    }
                }
            })
        }
    }
});
