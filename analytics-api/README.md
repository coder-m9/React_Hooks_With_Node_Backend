## Installation and Running the Application

Technologies Used - Node.JS

Use below commands to setup and run the application

npm install - To install the libraries for the application

npm start (or) nodemon - To run the application

After starting the server, you can fetch below GET URL's.
http://localhost:3001/api/v1/analytics/userstats
http://localhost:3001/api/v1/analytics/userstats?name=gallant_chandrasekhar&status=completed ( To filter by name and status)

API's are versioned

Node/NPM Version Used for development:

Node Version - v10.15.3
NPM Version - 6.4.1

### Configuraiion

Application configuration are stored in below files

1. .env - Environment and other details are stored here
2. config/<Environment>/json - Application related config like url are stored here.

### Tests

Tests are written using Mocha and Chai. (Test cases are not covered extensively)
Istanbul is used for Code Coverage.

'npm run test' - This command runs the test cases
'npm run coverage' - This command runs the code coverage.Code coverage results will be stored automatically in ./coverage/lcov-report/index.html

## Features

- Get the user data
- Pass Optional filters- status and name

## API Docs

API docs can be accessed at
http://localhost:3001/api/docs

### Additional Info

1. We cannot query GCS directly so for every request the entire data are loaded from GCS
2. API supports filter but currently it is handled in UI
