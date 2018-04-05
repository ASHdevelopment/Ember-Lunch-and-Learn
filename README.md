# Ember-Lunch-and-Learn

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Latest Session Challenges
1. Generate a `hotel` model and add the attributes: `name:string`, `price:number`, `favorite:boolean`, and `details:string`.
1. In the hotel route, remove the hard-coded object and instead return hotel model from the Ember data `store` object. Hint: You need to get **all** `hotel` records.
1. Install the `ember-cli-mirage` library.
1. Generate a mirage factory for `hotel` then set it up to generate fake data using `Faker` for `name`, `price`, `favorite`, and `details`. When setting this up, the types of the data generated should correspond to the model types we defined in the `hotel` model. More on `Faker.js`: https://github.com/marak/Faker.js/
1. In the mirage scenarios file, create 10 records named `hotel`.
1. In the mirage config file, add a handler to request of type `get` to the `/hotels` endpoint. Make sure `hotels` is pluralized.
1. **Homework from last session:** Add Ember Data & models to the restaurants route. Also, add a mirage factory for the restaurant route to generate fake data.
1. **Bonus Homework:** Read about creating nested relationships within Ember data models.

## Latest Session Recap
1. Can you name few attribute types used when defining our models?
1. We retrieved the `hotel` model with `store.findAll('hotel')`. How does Ember know how to make a get request to the `/hotels` endpoint?
1. How do we make mirage handle API requests such as `GET`, `SET`, `PUT`, and `DEL`? What about passing params to the endpoint?


## Initial Setup (cloning this repo)
1. Make sure you have git setup on your computer
1. Create a folder on your local computer that will eventually hold this project (the rest of the steps should be done in the command line in that folder)
1. `git clone https://github.com/ASHdevelopment/Ember-Lunch-and-Learn.git`
1. `cd Ember-Lunch-and-Learn` to move into the folder that was downloaded
1. `ember init`. Do not overwrite any of the files when prompted.
1. If this is **NOT** your first time working in this project and you want to preserve the work you've already done, only select `Yes` to overwrite the following files: `app/index.html`, `test/index.html`, `config/environment.js`, `package.json`, `bower.json`, and `README.md`.
1. `ember s` will start the project locally in `http://localhost:4200`. Open [http://localhost:4200](http://localhost:4200) to make sure it's working. 

## Shorthand
`ember g` = `ember generate`  
`ember s` = `ember serve`
