[![Build Status](https://travis-ci.org/kregina/fe-fortumo-test.svg?branch=master)](https://travis-ci.org/kregina/fe-fortumo-test)  [![codecov](https://codecov.io/gh/kregina/fe-fortumo-test/branch/master/graph/badge.svg)](https://codecov.io/gh/kregina/fe-fortumo-test) [![Dependencies](https://david-dm.org/kregina/fe-fortumo-test.svg)](https://david-dm.org/kregina/fe-fortumo-test)

# Fortumo
This project was developed as a challenge for Fortumo Frontend Developer opportunity.

## Getting Started

A simple application that does multiple requests to different services in sequence. It know the URL of the first service and gets
each subsequent request from the response.
Writing an iterator which polls a number of external services and if a certain criterion is met, redirects the user elsewhere.

From the user's perspective, the experience is as follows:

* user arrives to the site,
* clicks a button,
* sees a loader,
* and is redirected to another page.

From the technical perspective, the flow follows a similar pattern:

* user arrives to the site,
* front end makes a request to the first service,
* the first service responds with the url of the second service and instructs to make an XHR request,
* front end makes a request to the second service,
* 3-4 are repeated n times
* the (n+1)th service responds with the next url and instructs to redirect the user to the page

### Prerequisites

To run this project you need: 

[NodeJs](https://nodejs.org/en/download/)

### Installing and running

Clone the project:

```
git clone https://github.com/kregina/fe-fortumo-test.git
```

Install the depedencies:

```
npm install
```

Run the application:

```
npm start
```

Run the tests:

```
npm test
```

Run the tests with code coverage:

```
npm run test:coverage
```

## Author

* **Kelly Silva** - [Linkedin](https://www.linkedin.com/in/kregina/)