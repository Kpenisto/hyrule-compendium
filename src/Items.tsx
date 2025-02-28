import React from 'react';

interface ItemProps {
  name: string;
  imageUrl: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Item;
