import React, { useState } from 'react';

interface MonsterProps {
  name: string;
  imageUrl: string;
  description: string;
  commonLocations: string[] | null;
  drops: string[] | null;
}

const Monster: React.FC<MonsterProps> = ({ name, imageUrl, description, commonLocations, drops }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Hover Effect: Locations and Drops */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold">Common Locations:</h4>
            <ul className="text-sm">
              {/* Check if commonLocations is an array before using map */}
              {Array.isArray(commonLocations) && commonLocations.length > 0 ? (
                commonLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))
              ) : (
                <li>No locations available</li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Drops:</h4>
            <ul className="text-sm">
              {/* Check if drops is an array before using map */}
              {Array.isArray(drops) && drops.length > 0 ? (
                drops.map((drop, index) => (
                  <li key={index}>{drop}</li>
                ))
              ) : (
                <li>No drops available</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Monster;
