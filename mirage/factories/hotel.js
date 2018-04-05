import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name: faker.company.bs,
    price: faker.list.random(3, 4, 5, 6, 7, 8),
    favorite: faker.random.boolean,
    details: faker.company.catchPhrase
});
