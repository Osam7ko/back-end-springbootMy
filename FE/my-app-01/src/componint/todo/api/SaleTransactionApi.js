import { apiClint } from "./ApiClient";

// Create a new sale transaction
export const createSaleTransactionApi = (username, saleData) =>
    apiClint.post(`/users/${username}/sales`, saleData);