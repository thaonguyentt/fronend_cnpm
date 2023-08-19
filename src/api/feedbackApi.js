import axiosClient from "./axiosClient";
const url = "feedback"
const feedbackApi = {
    async getAll() {
        const response = await axiosClient.get(url + '/allFeedback')
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

export default feedbackApi