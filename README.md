# React Circle CI Cypress
## Init React Project
- Use facebook app to create a scratch project: https://github.com/facebook/create-react-app
- Install packge: yarn"
- Test with: yarn test
- Run app with: yarn start
## Add Circle CI
- Create .circleci folder from the root
- Create config.yml file under the folder
- Connect circle ci with github repository (login in circle ci website)
- It should run test whenever pull request or merge happens in the repository
## Adding Cypress
- Add cypress: yarn add --dev cypress
