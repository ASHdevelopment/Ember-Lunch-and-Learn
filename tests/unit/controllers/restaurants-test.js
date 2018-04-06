import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Object from '@ember/object'; 
import { get} from '@ember/object'; 

module('Unit | Controller | restaurants', function(hooks) {
  setupTest(hooks);

  // Removing these tests temporarily bc actions moved to route
//   test('should toggle favorite attribute', function(assert) {
//     let controller = this.owner.lookup('controller:restaurants');

//     let a = Object.create({name: 'ProductA', price: 1, favorite: true});
//     let b = Object.create({name: 'ProductB', price: 2, favorite: false});
//     let c = Object.create({name: 'ProductC', price: 3, favorite: true});
//     let arrObjs = [a, b, c];
    
//     controller.set('model', arrObjs);
    
//     controller.send('toggleFav', 'ProductB');

//     assert.equal(arrObjs[1].favorite, true);
//   });

//   test('should increase product price', function(assert) {
//     let controller = this.owner.lookup('controller:restaurants');

//     let a = Object.create({name: 'ProductA', price: 1, favorite: true});
//     let b = Object.create({name: 'ProductB', price: 2, favorite: false});
//     let c = Object.create({name: 'ProductC', price: 3, favorite: true});
//     let arrObjs = [a, b, c];
    
//     controller.set('model', arrObjs);

//     controller.send('increasePrice', 'ProductA');

//     assert.equal(arrObjs[0].get('price'), 2);
//   });

//   test('should decrease product price', function(assert) {
//     let controller = this.owner.lookup('controller:restaurants');

//     let a = Object.create({name: 'ProductA', price: 1, favorite: true});
//     let b = Object.create({name: 'ProductB', price: 2, favorite: false});
//     let c = Object.create({name: 'ProductC', price: 3, favorite: true});
//     let arrObjs = [a, b, c];
    
//     controller.set('model', arrObjs);

//     controller.send('decreasePrice', 'ProductC');

//     assert.equal(get(arrObjs[2],'price'), 2);
//   });
});