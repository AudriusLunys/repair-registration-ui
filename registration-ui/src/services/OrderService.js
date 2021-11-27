import axios from "axios";

const ORDER_API_BASE_URL ="http://localhost:8080/api/v1/order";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }
}

export default new OrderService()