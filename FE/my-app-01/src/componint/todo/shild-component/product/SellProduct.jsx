import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { retrieveProductsService } from '../../api/ProductApi';
import { useAuth } from '../../security/AuthContext';
import { createSaleTransactionApi } from "../../api/SaleTransactionApi";


export default function SellProductComponent() {
    const navigate = useNavigate();
    const authContext = useAuth();
    const username = authContext.username;

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        retrieveProductsService(username)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [username]);

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    function removeFromCart(productId) {
        setCart(cart.filter(item => item.id !== productId));
    }

    function adjustQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            const updatedCart = cart.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            setCart(updatedCart);
        }
    }

    function handleSave() {
        cart.forEach(item => {
            const saleData = {
                productName: item.name,
                quantity: item.quantity,
                totalAmount: item.sellPrice * item.quantity
            };
    
            createSaleTransactionApi(username, saleData)
                .then(() => {
                    console.log("Sale saved successfully!");
                    navigate("/product");  // Navigate back to the product list
                })
                .catch(error => console.error("Error saving sale:", error));
        });
    
        console.log('Saving sale:', cart);
    }

    return (
        <div className="container mt-5 d-flex">
            <div className="w-75 me-4">
                <h1 className="text-center mb-4">Sell Products</h1>
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Product Name</th>
                            <th>Original Price</th>
                            <th>Sell Price</th>
                            <th>Add to Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.originalPrice.toLocaleString()}</td>
                                <td>{product.sellPrice.toLocaleString()}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-secondary mt-3"
                    onClick={() => navigate('/product')}
                >
                    Back
                </button>
            </div>

            <div className="w-25">
                <h2 className="text-center">Receipt</h2>
                <div className="card p-3 shadow-lg" style={{ backgroundColor: '#f5e4d4', borderRadius: '15px' }}>
                    {cart.length > 0 ? (
                        <>
                            <ul className="list-group mb-3">
                                {cart.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            {item.name} (x{item.quantity})
                                            <div className="d-flex mt-2">
                                                <button className="btn btn-secondary btn-sm me-2" onClick={() => adjustQuantity(item.id, item.quantity - 1)}>
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button className="btn btn-secondary btn-sm ms-2" onClick={() => adjustQuantity(item.id, item.quantity + 1)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <span>{(item.sellPrice * item.quantity).toLocaleString()}</span>
                                            <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-end fw-bold" style={{ fontSize: '1.2rem' }}>
                                Total: {cart.reduce((total, item) => total + item.sellPrice * item.quantity, 0).toLocaleString()}
                            </div>
                            <button className="btn btn-primary mt-3 w-100" onClick={handleSave}>
                                Save
                            </button>
                        </>
                    ) : (
                        <p>No items in receipt.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
