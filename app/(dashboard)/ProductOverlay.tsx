import React, { useState } from 'react';

interface ProductOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: { name: string; price: number; sales: number; createdAt: string }) => void;
}

export const ProductOverlay: React.FC<ProductOverlayProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sales, setSales] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, price: parseFloat(price), sales: parseInt(sales, 10), createdAt });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Sales</label>
          <input
            type="number"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Created At</label>
          <input
            type="datetime-local"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};
