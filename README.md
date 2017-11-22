# Ember-Lunch-and-Learn

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Latest Session Challenges
1. Generate a new controller `ember g controller restaurants`
1. Update the restaurants route so `model` now returns an array of objects with properties of `name`, `price`, and `favorite`
1. Add a `favorites` computed that only shows restaurants that are favorited. Add a corresponding favorites list in the `restaraurants` template
1. Add buttons for and actions to toggle favorite status, increase, and decrease price of each restaurant. You should see this in the browser; and if you increase/decrease price, you should see the price changing in the regular list AND favorites list.
1. (optional) Added unit tests for the controller actions

## Latest Session Recap
1. What's the difference between a `controller` and `route`?
1. What are computeds? Why are they useful? What are some useful computed methods built into Ember?
1. How do you watch a specific property of an array in a computed (e.g., `favorite`)? How about watching if an item has been added or removed from the array?
1. What are actions? How do you pass parameters to an action?
1. What do the following do:
    1. `toggleProperty`
    1. `incrementProperty`
    1. `decrementProperty`


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
