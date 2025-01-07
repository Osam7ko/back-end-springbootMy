
// First code with all the fetures with out the filter and the sell
/*
import { useEffect, useState } from "react";
import {
    retrieveProductsService,
    deleteProductService
} from "../../api/ProductApi";
import { useAuth } from "../../security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListProductComponent() {
    const authContext = useAuth();
    const username = authContext.username;
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Retrieve products on component mount
    useEffect(() => {
        refreshProducts();
    }, []);

    function refreshProducts() {
        retrieveProductsService(username)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }

    function deleteProduct(id) {
        deleteProductService(username, id)
            .then(() => {
                refreshProducts();
            })
            .catch((error) => console.log(error));
    }

    function handleSearchChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleAddNewProduct() {
        navigate("/add-product");
    }

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="mb-4">Product Details</h1>
            <div className="d-flex justify-content-between mb-3">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search Product"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f7f4ef" }}
                />
            </div>
            <table
                className="table table-hover"
                style={{ backgroundColor: "#f7f4ef", borderRadius: "12px" }}
            >
                <thead className="table-light" style={{ backgroundColor: "#d9a067" }}>
                    <tr>
                        <th>Product Name</th>
                        <th>Original Price</th>
                        <th>Sell Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.originalPrice.toLocaleString()}</td>
                            <td>{product.sellPrice.toLocaleString()}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    style={{ borderRadius: "15px" }}
                                >
                                    Edit <i className="bi bi-pencil-square"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
            <button
                    className="btn btn-secondary"
                    style={{ backgroundColor: "#d9a067", borderRadius: "20px" }}
                    onClick={handleAddNewProduct}
                >
                    Add
                </button>
            </div>
        </div>
    );
}*/

import { useEffect, useState } from "react";
import { retrieveProductsService, deleteProductService } from '../../api/ProductApi';
import { useAuth } from "../../security/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function ListProductComponent() {
    const authContext = useAuth();
    const username = authContext.username;
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        refreshProducts();
    }, []);

    function refreshProducts() {
        retrieveProductsService(username)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }

    function deleteProduct(id) {
        deleteProductService(username, id)
            .then(() => {
                refreshProducts();
            })
            .catch((error) => console.log(error));
    }

    function handleSearchChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleSort(key) {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const sortedProducts = [...products].sort((a, b) => {
        if (sortConfig !== null) {
            const { key, direction } = sortConfig;
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    const filteredProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function handleAddNewProduct() {
        navigate('/add-product');
    }

    function handleSellPage() {
        navigate('/sell-product');
    }

    return (
        <div className="container">
            <h1 className="mb-4">Product Details</h1>
            <div className="d-flex justify-content-between mb-3">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search Product"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f7f4ef" }}
                />
            </div>
            <table className="table table-hover" style={{ backgroundColor: "#f7f4ef", borderRadius: "12px" }}>
                <thead className="table-light" style={{ backgroundColor: "#d9a067" }}>
                    <tr>
                        <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>Product Name</th>
                        <th onClick={() => handleSort('originalPrice')} style={{ cursor: 'pointer' }}>Original Price</th>
                        <th onClick={() => handleSort('sellPrice')} style={{ cursor: 'pointer' }}>Sell Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.originalPrice.toLocaleString()}</td>
                            <td>{product.sellPrice.toLocaleString()}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => navigate(`/edit-product/${product.id}`)}
                                    style={{ borderRadius: "15px" }}
                                >
                                    Edit <i className="bi bi-pencil-square"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-secondary mx-2"
                    onClick={handleAddNewProduct}
                    style={{ borderRadius: "20px", padding: "10px 20px", fontSize: "1rem" }}
                >
                    Add
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={handleSellPage}
                    style={{ borderRadius: "20px", padding: "10px 20px", fontSize: "1rem" }}
                >
                    <i className="bi bi-cart-fill"></i> Cart
                </button>
            </div>
        </div>
    );
}




