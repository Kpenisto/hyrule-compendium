import React, { useState, useEffect } from 'react';
import Monster from './Monsters';
import Item from './Items'; // Assuming you have an Item component to display item details
import { getMonsters, getItems } from './services/hyruleAPI'; // You need to add getItems to the API service

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);  // Add state for items
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const monsterData = await getMonsters();
      const itemData = await getItems();  // Fetch items here

      console.log('Monster Data:', monsterData);
      console.log('Item Data:', itemData);

      if (monsterData && itemData) {
        setMonsters(monsterData.data);
        setItems(itemData.data);  // Set items data
        setLoading(false);
      } else {
        console.error('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-900 text-white py-4">
        <h1 className="text-3xl text-center">Hyrule Compendium</h1>
      </header>

      <div className="container mx-auto p-4">
        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <div>
            {/* Monsters Section */}
            <section className="my-8">
              <h2 className="text-2xl font-semibold text-center mb-4">Monsters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {monsters.map((monster) => (
                  <Monster
                    key={monster.id}
                    name={monster.name}
                    imageUrl={monster.image}
                    description={monster.description}
                    commonLocations={monster.common_locations}
                    drops={monster.drops}
                  />
                ))}
              </div>
            </section>

            {/* Items Section */}
            <section className="my-8">
              <h2 className="text-2xl font-semibold text-center mb-4">Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    imageUrl={item.image}
                    description={item.description}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
