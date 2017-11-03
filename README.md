# `gannett-ui` — the UI for the Gannett application


## Getting Started

To get you started you can simply clone the `gannett-api` repository and install the dependencies:

### Prerequisites

You need git to clone the `gannett-api` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `gannett-api`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `gannett-api`

Clone the `gannett-api` repository using git:

```
git clone https://github.com/bmehta/gannett-api.git
cd gannett-api
```

### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at a url like [`localhost:3000/api/fibonacci`].

## Testing
The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```