import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        let arr = [
            {
                name:'Hilton', 
                price: 1, 
                favorite: true
            }, 
            {
                name:'Marriott', 
                price: 3, 
                favorite: false
            },
            {
                name:'Sheraton',
                price:2,
                favorite:true
            }
        ]

        //we need to convert the array of restaurants into an ember object so we can get() and set() later
        const arrObjs = arr.map(a => {
            return Ember.Object.create(a)
        });

        // let mcDonalds = Ember.Object.create({name: 'McDonalds', price: 1, favorite: true});
        // let rubios = Ember.Object.create({name: 'Rubios', price: 3, favorite: false});
        // let pizzaHut = Ember.Object.create({name: 'Pizza Hut', price: 2, favorite: true});

        // let arrObjs = [mcDonalds, rubios, pizzaHut];

        return arrObjs;
    }
});
