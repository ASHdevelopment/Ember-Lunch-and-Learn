import DS from 'ember-data';

const {attr} = DS;
export default DS.Model.extend({

    name: attr('string'),
    price: attr('number'),
    favorite: attr('boolean'),
    details: attr('string')

});
