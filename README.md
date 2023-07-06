# Tree Huggers

## Authors

Sam Kemp,
Frances Hitchcock

## Project Description

Website for a fictional organisation that encourages groups to sign up for tree planting, tracks their progress and feeds back to them at the end.

## Problem Domain and How the Project Solves the Problems

The problem is that not enough trees are being planted across the region. This website encourages groups to support tree planting in a friendly competitive way by planting a specified number of trees each week for a chosen number of weeks.

From a technical aspect the problem is to collect data from a new "group" using a HTML form and JS. The form inputs will be for the name of the group and the number of weeks they want to take part for.

The minimum viable product (MVP) is for the number of trees planted to be collected each week and at the end of the planting period the data will be presented in a chart along with the total amount of CO2 that will be removed from the atmosphere. Data from four fictitious groups will also be generated and presented along with the "user group" by means of a constructor function.

## Pages

- Home page: Landing page with brief outline of the organisation and initiative. No JS required
- About page: Gives information about the founders Sam and Frances and a call to action to sign up for tree planting scheme. JavaScript file may be required to add a class name to photos to initiate functionality.
- User input page "my trees". HTML form, with JS file containing constructor function and prototype methods. Also a file to handle JS specific to this page including setting data to local storage.
- Data display page. Will display data as chart/s. Requires a JS file to retrieve data from local storage.

## Libraries

Chart.js

## Monday 3rd July - Session 1

By the end of the day the MVP will be:

- to have the generic header and footer set up
- to have the form HTML completed on user input page
- to have constructor function set up and operating for basic information

### Reflections on Monday 3rd July

- Generic header and footer set up. Styling to be optimised.
- Constructor function is set up and operating

## Tuesday 4th July - Session 2

By the end of the day the MVP will be:

- Input page form styling to be optimised
- Landing page styling complete
- About page skeleton and basic styling completed
- Fetch data from local storage and make basic chart to display results. (Stretch goal - calculate CO2 data and display)

### Reflections on Tuesday 4th July

- About page skeleton and main functionality completed
- Data fetched from LS and basic chart displays.

## Wednesday 5th July - Session 3

By the end of the day the MVP will be:

- Finish JS functionality for input page including LS saving and retrieval
- Create leaf animation.
- Stretch goal - add it CO2 calculation

### Reflections on Wednesday 5th July

- Finished JavaScript functionality
- Created the leaf animation
- Didn't add Co2 addition
- Tidied up CSS throughout all pages

## Thursday 6th July - Session 4

- Complete video CSS formatting
- Style the forms with CSS: Add PNG image of leaves (translucent) in background.
- Refactor code
- When refreshing chart - back to home page (JS)
- Stretch goal - Add Co2 calculation

### Reflections on Thursday 6th July

- Video formatting completed.
- Form styling completed, including background image
- Code refactored
- User returns to home page when local storage is cleared and results page refreshed
- CO2 calculations added
