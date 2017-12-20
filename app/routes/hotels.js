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

        //we need to convert the array of hotels into an ember object so we can get() and set() later
        const arrObjs = arr.map(a => {
            return Ember.Object.create(a)
        });


        return arrObjs;
    }
});
