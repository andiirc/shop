import api from "../../infrastructure/api/client/axios";

const resource = '/products';

export default {
  
  async get(params) {
    const response = await api.get(`${resource}?${params}`);
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`${resource}/${id}`);
    return response.data;
  },

};