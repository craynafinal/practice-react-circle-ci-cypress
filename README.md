# React Circle CI Cypress
## Init React Project
- Use facebook app to create a scratch project: `yarn create react-app my-app` (https://github.com/facebook/create-react-app)
- Install packge: `yarn`
- Test with: `yarn test`
- Run app with: `yarn start`
## Add Circle CI
- Create .circleci folder from the root
- Create config.yml file under the folder
- Connect circle ci with github repository (login in circle ci website)
- It should run test whenever pull request or merge happens in the repository
## Adding Cypress
- Add cypress: `yarn add --dev cypress`
- Add this to scripts section of package.json
```
"scripts": {
   ...
   "cypress:open": "cypress open",
   "cypress:run": "cypress run"
}
```
- Can open cypress locally by: `yarn run cypress:open`
- Add base url to the cypress.json config file
```
{
  "baseUrl": "http://localhost:3000"
}
```
- Add cypress test
- Run cypress test: `yarn run cypress:run`
- Setup circle ci to start server and run integration test
- Used dockerfile "remarkableas/circleci-cypress" to run cypress and circle ci together (https://hub.docker.com/r/remarkableas/circleci-cypress)
