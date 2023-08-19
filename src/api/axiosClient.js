import { notification } from 'antd';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'content-type': 'application/json',
  }
})


axiosClient.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config
    if (
      [401, 403].includes(error?.response?.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      notification.error('Session expired. Please login again.')
      return axiosClient(originalRequest)
    }

    return Promise.reject(error)
  },
)

// axiosClient.then((res) => {
//   if (!!res?.ok) {
//     notification.success({
//       message: "success",
//       description: "success",
//       placement: "bottomLeft",
//       duration: 5,
//     });
//     return res.json();
//   } else {
//     let errorMessage = "Failed!";
//     notification.error({
//       message: "error",
//       description: res.message || errorMessage,
//       placement: "bottomLeft",
//       duration: 5,
//     });
//   }

// })
export default axiosClient