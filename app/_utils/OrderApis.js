const { default: axiosClient } = require("./axiosClient");

const createOrder = axiosClient.post('/order',data);

export default {
    createOrder
}