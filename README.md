# E-commerce UI / React project

This React application is a portfolio project completed as part of the Codecademy Full Stack Engineer certification program:\
    https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-full-stack-portfolio-project/modules/fscp-ecommerce-app-client/kanban_projects/ecommerce-app-client\

Only generally-worded requirements are provided. All design / test / code is done without assistance / guidance.

It interfaces with a [RESTful API](https://github.com/mattburnett-repo/cc-ecom-rest-api-v2) developed in a previous Codecademy project
  
---

## Assets

Wireframes:
* 01-Browser Login: https://wireframe.cc/6MXHyR\
* 02-Browser Landing Page / Dashboard: https://wireframe.cc/6MXHyR\
* 03-Browser Products Listing: https://wireframe.cc/D5VIOi\
* 04-Browser Product Detail: https://wireframe.cc/7nTPt0\
* 05-Browswer Cart Detail: https://wireframe.cc/7nTPt0\
* 06-Browser Shipping Info: https://wireframe.cc/ag82hc\
* 07-Browser Payment Info: https://wireframe.cc/nx8Dv9\
* 08-Browser Order Confirmation: https://wireframe.cc/KF5blD\


Project Kanban: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-full-stack-portfolio-project/modules/fscp-ecommerce-app-client/kanban_projects/ecommerce-app-client

Datasource / API: https://github.com/mattburnett-repo/cc-ecom-rest-api-v2
  
To install after downloading / cloning this repo, 
  * run
    * npm install
  * then
    * npm start
  
---

## Testing
Tests are located in two folders under the src/\__tests\__ folder

Tests are written using React Testing Library and are run using Jest test runner.

---

## Technologies used
* Wireframe.cc online wireframing tool
* React 16
* React Hooks
  * useEffect
  * useState
  * useContext
  * useHistory
  * useSelector
  * useDispatch
* Redux / Redux Toolkit / Redux Persist
* React Router
* React Styled Components
* React Testing Library / Jest
* Passport Authentication Library
  * Local Strategy
  * Google OAuth Strategy 
* JSON Web Token authorization
*  E-Commerce REST API [built as separate project](https://github.com/mattburnett-repo/cc-ecom-rest-api-v2)
* Stripe payment API integration

* Product descriptions generated with Rytr (https://rytr.me/)
  
---

## Features
* API calls are authenticated using Json Web Tokens
* Displays a user-specific dashboard
* Users can browse / search product categories
* Users can add / read / update / delete cart items
* Users can add shipping and payment information
* Users can make a simulated credit card payment via Stripe to complete an order

---

### Future work / TODO
* Everything can always be better
  * Sort out OAuth callback issue that doesn't redirect to React app server
* Implement admin functionality to
  * Manage users / orders / carts
  * Manage product listings
  * Order fulfillment tracking / processing
