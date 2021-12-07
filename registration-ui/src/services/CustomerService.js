import axios from "axios";

const CUSTOMER_API_BASE_URL ="/api/v1/customer";

class CustomerService {

    getCustomerByUUID(uuid) {
        return axios.get(CUSTOMER_API_BASE_URL + '/' + uuid);

    }

    updateCustomer (customer, uuid){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + uuid, customer);
    }
}
export default new CustomerService()

