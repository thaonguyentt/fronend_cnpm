import axiosClient from "./axiosClient";
const url = "booking";
const bookingApi = {
  async get() {
    return await axiosClient.get("book/allBook");
  },
  async filterRoom(params) {
    const response = await axiosClient.post(url + "/roomCondition", {
      ...params,
    });
    return response;
  },
  // get(id) {
  //     return axiosClient.get(`/${url}/${id}`);
  // },

  add(data) {
    return axiosClient.post(url, data);
  },

  update(data) {
    return axiosClient.patch(`/${url}/${data.id}`, data);
  },

  remove(id) {
    return axiosClient.delete(`/${url}/${id}`);
  },
};

export default bookingApi;
