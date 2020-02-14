import axios from "axios";

export default {
    searchItem: function(item) {
        return axios.get("http://localhost:3001/api/products", { params: { q: item } });
    }
}