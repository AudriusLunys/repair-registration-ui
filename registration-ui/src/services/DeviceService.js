import axios from "axios";

const DEVICE_API_BASE_URL ="/api/v1/device";

class DeviceService {

    getDeviceByUUID(uuid) {
        return axios.get(DEVICE_API_BASE_URL + '/' + uuid);

    }

    updateDevice (device, uuid){
        return axios.put(DEVICE_API_BASE_URL + '/' + uuid, device);
    }

}
export default new DeviceService()