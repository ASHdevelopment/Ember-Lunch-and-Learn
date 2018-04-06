import { filterBy } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    favorites:filterBy('model', 'favorite'),
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
