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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
