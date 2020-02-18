import axios from "axios";

export default {
    searchItem: function(item) {
        return axios.get("http://localhost:3001/api/products", { params: { q: item } });
    },
    searchCategories: function(item) {
        return axios.get("http://localhost:3001/api/products/category", { params: { q: item } });
    },
    itemDetails: function(item) {
        return axios.get(`http://localhost:3001/api/products/${item}`);
    },
    createItem: function(item) {
        return axios.post("http://localhost:3001/api/products", item);
    },
    deleteItem: function(item) {
        return axios.delete(`http://localhost:3001/api/products/${item[0].id}`);
    },
    findAllFromDB: function() {
        return axios.get(`http://localhost:3001/api/products/db`);
    }

}