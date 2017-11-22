import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const{
  get
} = Ember;

moduleFor('controller:restaurants', 'Unit | Controller | restaurants', {
  // Specify the other units that are required for this test.
//   needs: ['route:restaurants']
});

// Replace this with your real tests.
test('should toggle favorite attribute', function(assert) {
  let controller = this.subject();

  let a = Ember.Object.create({name: 'ProductA', price: 1, favorite: true});
  let b = Ember.Object.create({name: 'ProductB', price: 2, favorite: false});
  let c = Ember.Object.create({name: 'ProductC', price: 3, favorite: true});
  let arrObjs = [a, b, c];
  
  controller.set('model', arrObjs);

  controller.send('toggleFav', 'ProductB');

  assert.equal(arrObjs[1].favorite, true);
});

test('should increase product price', function(assert) {
  let controller = this.subject();

  let a = Ember.Object.create({name: 'ProductA', price: 1, favorite: true});
  let b = Ember.Object.create({name: 'ProductB', price: 2, favorite: false});
  let c = Ember.Object.create({name: 'ProductC', price: 3, favorite: true});
  let arrObjs = [a, b, c];
  
  controller.set('model', arrObjs);

  controller.send('increasePrice', 'ProductA');

  assert.equal(arrObjs[0].get('price'), 2);
});

test('should decrease product price', function(assert) {
  let controller = this.subject();

  let a = Ember.Object.create({name: 'ProductA', price: 1, favorite: true});
  let b = Ember.Object.create({name: 'ProductB', price: 2, favorite: false});
  let c = Ember.Object.create({name: 'ProductC', price: 3, favorite: true});
  let arrObjs = [a, b, c];
  
  controller.set('model', arrObjs);

  controller.send('decreasePrice', 'ProductC');

  assert.equal(get(arrObjs[2],'price'), 2);
});