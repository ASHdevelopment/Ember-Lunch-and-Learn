# Ember-Lunch-and-Learn

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Latest Session Challenges
1. **Homework from last session**: convert `restaurants` template to use the new components from the previous session.
1. Add a `details` property on each hotel and restaurant. And add a button to show/hide details within a newly created `location-list-item` component.
1. If `showDetails` is true, add a class `showingDetails` that highlights the item with a yellow background.
1. Insert an "Order Now" link that links to an `orders.new` route (you will have to generate this). Do this only for restaurants. You will need to pass an `allowOrders` property into `location-list`, which determines if this link displays. Use the `yield` helper in `location-list-item` to insert this link after the `price` property. Make sure that the route for `orders` uses a dynamic segment to dispaly "Place an Order for [dynamicLocationName]". You will need to revisit routes to do this: https://guides.emberjs.com/v2.12.0/routing/specifying-a-routes-model/#toc_dynamic-models.
1. Components should follow data-down, actions-up so do not modify the price and favorite properties on the locations in the component. The route should handle that. Show/hide details is fine in the component because the `showDetails` property live in the component, not higher up in the app.


## Latest Session Recap
1. How do you force toggling class based on a property change? 
1. What is the difference between `output` and `yield`?
1. What is a dynamic segment route?


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
