import axios from "axios";

export const API_URL = "http://10.5.223.215:8001/api";


class AppServices {
  login(body) {
    return axios.post(`${API_URL}/users/` + "login", body);
  }

  updateUser(body, id) {
    return axios.put(`${API_URL}/users`, body);
  }

  getCurrentUser() {
    return axios.get(`${API_URL}/users/current`);
  }

  register(body) {
    return axios.post(`${API_URL}/users`, body);
  }

  deleteUser() {
    return axios.delete(`${API_URL}/users`);
  }
}

export default new AppServices()