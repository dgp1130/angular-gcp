# Angular GCP

Just playing around with Google Cloud Platform to see how easily we can build a
full stack Angular application with an Express backend hosted on GCP.

To use this structure, make a new GCP project and `npm run frontend:deploy` and
`npm run backend:deploy`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Setup

* Install `gcloud`.
* Log in with `gcloud init`.
* Run `npm run frontend:deploy` to deploy the frontend.
* Run `npm run backend:deploy` to deploy the backend.

Deploying each end probably fails because Google Cloud runs `npm start`, which
doesn't know whether to run the frontend or the backend. Update each service's
"container arguments" to be `frontend` or `backend`, which gets passed to
`npm start` to pick the correct service.

You likely also need to bump memory requirements on the frontend to 1-2 GB for
Angular to build successfully.

## Deployment

* Run `npm run frontend:deploy` to deploy the frontend.
* Run `npm run backend:deploy` to deploy the backend.

Production instance runs at https://frontend-glud4nxwta-uw.a.run.app/ (if I'm
still paying to keep it up).

## Development server

Use `npm run frontend:dev` to start a live-reloading dev server of the Angular
application.

In a separate terminal, use `npm run backend:dev` to start the backend server in
watch mode.

Both servers are necessary to run the application locally.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
