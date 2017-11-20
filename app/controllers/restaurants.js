import Ember from 'ember';

const{
    get,
    isEqual,
    computed
} = Ember;

export default Ember.Controller.extend({
    //without using all the different computed methods, you would have to write some logic like this
    // favorites:computed('model.@each.favorite', function(){
    //   let restaurants = get(this, 'model');
    //   return restaurants.filter(restaurant =>{
    //       return restaurant.favorite === true;
    //   })
    // })
    //but but knowing the different methods, you can easily create computeds like this
    favorites:computed.filterBy('model', 'favorite'),
    actions:{
        //toggle the favorite property of a restaurant
        toggleFav(name){
            const model = get(this, 'model');
            //loop through each restaurant and if name matches what was passed into the action, toggle the boolean property
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.toggleProperty('favorite')

                    // if(get(r, 'favorite') == true) {
                    //     r.set('favorite', false);
                    // }else{
                    //     r.set('favorite', true);
                    // }
                }
            })
        },
        increasePrice(name){
            const model = get(this, 'model');
            //loop through each restaurant and if name matches what was passed into the action, incrase the price
            model.forEach(r => {
                if(isEqual(get(r, 'name'), name)){
                    r.incrementProperty('price')

                    // let p = get(r, 'price');
                    // p++;
                    // r.set('price', p);
                }
            })
        },
    }
});
