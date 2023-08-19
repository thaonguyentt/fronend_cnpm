import axiosClient from "./axiosClient";
const url = "serviceType"
const serviceApi = {
    async getAll() {
        const response = await axiosClient.get(url + '/allServiceType')
        return response
    },
  

    add(data) {
        return axiosClient.post(url, data);
    },

    update(data) {
        return axiosClient.put(`/${url}/${data?.id}`, data);
    },

    remove(id) {
        return axiosClient.delete(`/${url}/${id}`);
    },

}

export default serviceApi