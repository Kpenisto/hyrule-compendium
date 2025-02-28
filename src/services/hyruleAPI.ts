import axios from 'axios';

const baseUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium'; // API URL

export const getMonsters = async () => {
    try {
      const response = await fetch(
        'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching monsters:', error);
      return null;
    }
  };
  
  export const getItems = async () => {
    try {
      const response = await fetch(
        'https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      return null;
    }
  };