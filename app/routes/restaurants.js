import Ember from 'ember';

const {
    get,
    isEqual
} = Ember

export default Ember.Route.extend({
    model(){
        let arr = [
            {
                name:'McDonalds', 
                price: 1, 
                favorite: true,
                details:"i like big macs"
            }, 
            {
                name:'Rubios', 
                price: 3, 
                favorite: false,
                details:"taco tues"
            },
            {
                name:'Pizza Hut',
                price:2,
                favorite:true,
                details:"cheese in the crust?"
            }
        ]

        //we need to convert the array of restaurants into an ember object so we can get() and set() later
        const arrObjs = arr.map(a => {
            return Ember.Object.create(a)
        });

        return arrObjs;
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
