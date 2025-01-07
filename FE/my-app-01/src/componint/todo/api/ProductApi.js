import { apiClint } from "./ApiClient";

// ✅ Retrieve all products
export const retrieveProductsService = (username) => 
    apiClint.get(`/users/${username}/product`);

// ✅ Retrieve a specific product by ID
export const retrieveOneProductService = (username, id) => 
    apiClint.get(`/users/${username}/product/${id}`);

// ✅ Delete a product by ID
export const deleteProductService = (username, id) => 
    apiClint.delete(`/users/${username}/product/${id}`);

// ✅ Update a product by ID
export const updateProductApi = (username, id, product) => 
    apiClint.put(`/users/${username}/product/${id}`, product);


// ✅ Create a new product
export const createProductApi = (username, product) => 
    apiClint.post(`/users/${username}/product`, product);
