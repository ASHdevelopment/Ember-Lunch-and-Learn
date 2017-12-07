# Ember-Lunch-and-Learn

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Latest Session Challenges
1. Add a `hotels` route because now our app can show a list of hotels! Hard-code a POJO of 3 hotels
1. Add a list of hotels in the hotels template (you can use the restaurants list). Now any updates to our list of locations will need updated multiple times, meaning our code is not DRY. So...
1. `ember g component location-list` and use this component in the `restaurants` and `hotels` route
1. `ember g component location-list/item` to create a component for each list item and allow for granular control over each item
1. Move your actions and properties from the restaurants `controller` into the appropriate `component`. The moved actions needs to travel all the way up to the route (through the controller).
1. Add a `details` property on each hotel and restaurant. And add a button to show/hide details within the `location-list/item` component.
1. Integration test?

## Latest Session Recap
1. What's the difference between a `controller` and `component`?
1. How do you add a component to a template?
1. Can components be nested inside of each other?
1. How do you force toggleing class based on a property change?


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
