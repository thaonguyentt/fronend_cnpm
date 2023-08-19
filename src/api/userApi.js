import axiosClient from "./axiosClient";
const url = "user"
const userApi = {
    async getAll() {
        const response = await axiosClient.get(url + '/allRoom')
        return response
    },
    async filterRoom(params) {
        const response = await axiosClient.post(url + '/roomCondition', {
            ...params
        })
        return response
    },
    get(id) {
        return axiosClient.get(`/${url}/${id}`);
    },

    add(data) {
        return axiosClient.post(url, data);
    },

    update(data) {
        return axiosClient.put(`/${url}/${data.id}`, data);
    },

    remove(id) {
        return axiosClient.delete(`/${url}/${id}`);
    },

}

export default userApi