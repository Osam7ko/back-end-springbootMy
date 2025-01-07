import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { retrieveOneProductService, updateProductApi, deleteProductService } from '../../api/ProductApi';
import { useAuth } from "../../security/AuthContext";

export default function EditProductComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const authContext = useAuth();
    const username = authContext.username;

    const [productName, setProductName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');

    useEffect(() => {
        retrieveOneProductService(username, id)
            .then((response) => {
                const product = response.data;
                setProductName(product.name);
                setOriginalPrice(product.originalPrice);
                setSellPrice(product.sellPrice);
            })
            .catch((error) => {
                console.log('Error retrieving product:', error);
            });
    }, [username, id]);

    async function handleUpdateProduct() {
        try {
            const updatedProduct = {
                name: productName,
                originalPrice,
                sellPrice,
            };

            await updateProductApi(username, id, updatedProduct);
            console.log('Product Updated:', updatedProduct);
            navigate('/product');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    }

    async function handleDeleteProduct() {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            try {
                await deleteProductService(username, id);
                console.log(`Product with ID ${id} deleted.`);
                navigate('/product');
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Edit Your Product</h1>
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
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Original Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sell Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={sellPrice}
                        onChange={(e) => setSellPrice(e.target.value)}
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
                        onClick={handleUpdateProduct}
                    >
                        Update
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDeleteProduct}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
