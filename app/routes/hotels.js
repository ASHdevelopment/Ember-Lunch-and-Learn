import Ember from 'ember';

const {
    get,
    isEqual
} = Ember

export default Ember.Route.extend({
    model(){
        return this.store.findAll('hotel');
    },
    actions:{
        toggleFav(name){
            //grab the model from the controller until we use ember data
            let model = get(this, 'controller.model')
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.toggleProperty('favorite')
                }
            })
        },
        increasePrice(name){
            let model = get(this, 'controller.model')
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.incrementProperty('price')
                }
            })
        },
        decreasePrice(name){
            let model = get(this, 'controller.model')
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
