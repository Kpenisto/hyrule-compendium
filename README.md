# Hyrule Compendium

A React app that displays data from the [Hyrule Compendium API](https://botw-compendium.herokuapp.com/). This app fetches and displays information about monsters and items found in **The Legend of Zelda: Breath of the Wild**.

## Features

- Display monsters and items from the Hyrule Compendium
- View detailed information about each monster or item, including descriptions, common locations, and item drops
- Hover over the monster/item cards to see additional information such as common locations and drops (for monsters)
- Responsive design that adjusts to different screen sizes

## Demo

You can view the live demo here: [Hyrule Compendium Demo](https://gadhagod.github.io/Hyrule-Compendium-API/#/)

## Technologies Used

- **React** – JavaScript library for building user interfaces
- **Tailwind CSS** – A utility-first CSS framework for styling the app
- **TypeScript** – A strongly typed programming language that builds on JavaScript
- **Fetch API** – For making API requests to retrieve data from the Hyrule Compendium API

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/hyrule-compendium.git
cd hyrule-compendium
```

### Install dependencies

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed. If you don't, download and install them first.

```bash
npm install
```

### Run the app locally

After installing the dependencies, you can start the development server:

```bash
npm start
```

This will run the app locally on `http://localhost:3000`.

## File Structure

```
/src
  /components
    Monster.tsx       - Displays details about a monster
    Item.tsx          - Displays details about an item
  /services
    hyruleAPI.ts      - Functions for fetching data from the Hyrule Compendium API
  App.tsx             - Main application component that handles data fetching and displays the app
  index.tsx           - Entry point for the React app
  tailwind.config.js  - Tailwind CSS configuration file
  package.json        - Project dependencies and scripts
```

## How It Works

1. **Fetching Data**: The app uses `getMonsters` and `getItems` functions in the `services/hyruleAPI.ts` file to fetch data from the Hyrule Compendium API.
2. **Rendering Data**: The app displays monster and item details by passing the fetched data into the `Monster` and `Item` components.
3. **Responsive Design**: Tailwind CSS is used for styling the components with responsive grids, making the app mobile-friendly.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and create a pull request. If you find any bugs or issues, please open an issue and I'll take a look.

## License

This project is licensed under the MIT License.

---

Let me know if you'd like to adjust or add anything specific!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
