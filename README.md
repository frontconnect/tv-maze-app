# TV Maze App

This app has 2 pages/domains.
1) Show page which displays information about a selected show page.
2) Episode page which displays the details about an episode of a certain show.

# Dependencies

- For build environment:

npm 6+
Node 8.10.0+\

- For Cypress.io tests

Chrome 71

# Setup

- This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- RxJs is used for REST calls.
- React Hooks are used.
- Atomic design principles are implemented.
- Single Search API is used for search input.

# Structure

As observed in the tree structure below, 

- The main logic is under src folder. 
- Components are defined using the atomic design principles.
- Logic for 2 domains for 2 different pages are defined under domain folder.
- Generic services such as the http service defined in the root service folder.

```bash
├── ./cypress
│   ├── ./cypress/fixtures
│   ├── ./cypress/integration
│   ├── ./cypress/plugins
│   └── ./cypress/support
└── ./src
    ├── ./src/components
    │   ├── ./src/components/atoms
    │   │   ├── ./src/components/atoms/button
    │   │   └── ./src/components/atoms/title
    │   ├── ./src/components/common
    │   ├── ./src/components/molecules
    │   │   └── ./src/components/molecules/logo
    │   ├── ./src/components/organisms
    │   │   ├── ./src/components/organisms/card
    │   │   ├── ./src/components/organisms/cover
    │   │   ├── ./src/components/organisms/header
    │   │   ├── ./src/components/organisms/menu
    │   │   ├── ./src/components/organisms/search
    │   │   ├── ./src/components/organisms/season
    │   │   └── ./src/components/organisms/seasonTable
    │   ├── ./src/components/pages
    │   │   ├── ./src/components/pages/Episode
    │   │   ├── ./src/components/pages/Error
    │   │   ├── ./src/components/pages/Show
    │   │   └── ./src/components/pages/common
    │   └── ./src/components/styles
    │       └── ./src/components/styles/vendor
    ├── ./src/config
    ├── ./src/domains
    │   ├── ./src/domains/common
    │   │   └── ./src/domains/common/coverImage
    │   ├── ./src/domains/episode
    │   └── ./src/domains/show
    └── ./src/services
        ├── ./src/services/http
        └── ./src/services/search
```

# How to run the project

1) Install the dependencies
    ```console
    npm install
    ```
2) Run the server
    ```
    npm run start
    ```

3) - In order to open the default **Powerpuff Girls** page goto `http://localhost:3000/` on your browser.
   - In order to open another **show page** search it from the search input.
   - In order to open the episodes page, click to one of the episodes link below or feel free to type the link in
     address bar. *e.g.* [http://localhost:3000/shows/158/episodes/5/13](http://localhost:3000/shows/158/episodes/5/13)

# How to run integration tests

1) Start the cypress terminal
    ```console
    npm run cypress
    ``` 
- Click `Run all specs` to start the tests.

If you want to run cypress in debug mode, type `npm run cypress:debug`
