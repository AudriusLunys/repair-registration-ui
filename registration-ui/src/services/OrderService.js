import axios from "axios";

const ORDER_API_BASE_URL ="/api/v1/order";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }
    getOrderByRegNr (registrationNr){
        return axios.get(ORDER_API_BASE_URL + '/' + registrationNr);
    }
}

export default new OrderService()