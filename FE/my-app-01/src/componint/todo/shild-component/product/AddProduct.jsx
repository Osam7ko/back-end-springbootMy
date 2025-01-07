import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProductApi } from '../../api/ProductApi';
import { useAuth } from '../../security/AuthContext';

export default function AddProduct() {
    // ✅ Using AuthContext to get the logged-in username
    const authContext = useAuth();
    const username = authContext.username;

    // ✅ State management for form inputs
    const [productName, setProductName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const navigate = useNavigate();

    // ✅ Function to handle adding a new product
    async function handleAddProduct() {
        try {
            const newProduct = {
                name: productName,
                originalPrice,
                sellPrice,
            };

            // ✅ Call the API to create the product
            await createProductApi(username, newProduct);
            console.log('Product Added:', newProduct);

            // ✅ Navigate back to the product list page
            navigate('/product');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    // ✅ JSX for rendering the add product form
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Add Your Product</h1>
            <div
                className="card p-4 shadow-lg"
                style={{
                    backgroundColor: '#f5e4d4',
                    borderRadius: '15px',
                }}
            >
                <div className="mb-3">
                    <label className="form-label">Product Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter product name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Original Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="Enter original price"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sell Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={sellPrice}
                        onChange={(e) => setSellPrice(e.target.value)}
                        placeholder="Enter sell price"
                    />
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate('/product')}
                    >
                        Back
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={handleAddProduct}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
