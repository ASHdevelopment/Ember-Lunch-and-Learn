import Ember from 'ember';

const{
    get,
    isEqual,
    computed
} = Ember;

export default Ember.Controller.extend({
    favorites:computed.filterBy('model', 'favorite'),
    actions:{
        //toggle the favorite property of a restaurant
        toggleFav(name){
            const model = get(this, 'model');
            //loop through each restaurant and if name matches what was passed into the action, toggle the boolean property
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.toggleProperty('favorite')
                }
            })
        },
        increasePrice(name){
            const model = get(this, 'model');
            //loop through each restaurant and if name matches what was passed into the action, increase the price
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.incrementProperty('price')

                    // let p = get(r, 'price');
                    // p++;
                    // r.set('price', p);
                }
            })
        },
        decreasePrice(name){
            const model = get(this, 'model');
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
