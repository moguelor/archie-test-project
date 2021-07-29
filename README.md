### Challenge Project.

Challenge project created to show the knowledge acquired as UI Developer in frontend technologies like `react.js`, `graphql`, `apollo`, `typescript`.

### Started Kit

The initial structure is created by [create-next-app](https://nextjs.org/docs/getting-started), the setup for a modern web app with next.js.

### Installation

Application requires [Node.js](https://nodejs.org/es/) to run.

Execute the follow commands.

```
git clone https://github.com/moguelor/archie-test-project.git
cd archie-test-project
yarn install
yarn dev
```

> Note | The project is running on port `3000`.

### Structure Folder

For the folder organization, is used the metodology `structure by features`. I believe that is an easy way to manage the scalability of big projects. You can split one big application into the smallest ones `divide and conquer`.

```
|-- pages                   # Main code.
    |-- home                # Home page.
        |-- components      # Reusable components.
        |-- Container.tsx   # Smart component for to do calls on the api.
        |-- index.tsx       # Index point for the especific page.
        |-- querys.ts       # Graphql queries.
        |-- types.ts        # Typescript types.
    |-- _app.js             # Application component.
    |-- apolloConfig.ts     # Apollo configuration.
    |-- index.tsx           # Application entry point.
```

### Libraries

Here are the main libraries used in the project.

- [react](https://es.reactjs.org/) - Modern web library to use in the UI.
- [next + typescript](https://nextjs.org/) - The react framework for production and server side settings.
- [chakra-ui](https://chakra-ui.com/) - Create accessible React apps with speed.
- [apollo](https://www.apollographql.com/docs/react/) - Client for react to connect graphql.
- [react-spring](https://react-spring.io/) - Spring-physics based animation library.

#### Deploy

- [gh-pages](https://github.com/tschaub/gh-pages) - Publish files to a gh-pages branch on GitHub.

### Required features.

- [x] Should a be NextJs project, using create-next-app is totally perfect
- [x] Should use typescript

## Extra points.

- [x] Preferably use chakra ui for styled components.
- [x] Add a search bar that can filter through missions and only display the ones that match the current search entry.
- [x] Use one of the server-side functions NextJS provides to fetch data, if not explain why not.
- [x] Use apollo graphql to establish connection to endpoint
- [x] Make it mobile responsive.

## BONUS

- Added animations with the library `react-spring`.
- Used github boards to manage the task. You can see them [HERE](https://github.com/moguelor/archie-test-project/projects/1);

### [TODO]

- Add unit testings with [Jest](https://jestjs.io/)
- Generate a library component with [Storybook](https://storybook.js.org/) for reusable components.
- Add mobile gestures with [Hammer](https://hammerjs.github.io/)
