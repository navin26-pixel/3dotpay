import api from './api';

export const benefitsService = {
  getAll: async () => {
    try {
      const response = await api.get('/benefits');
      return response.data;
    } catch (error) {
      console.error('Error fetching benefits:', error);
      throw error;
    }
  },

  create: async (benefit) => {
    try {
      const response = await api.post('/benefits', benefit);
      return response.data;
    } catch (error) {
      console.error('Error creating benefit:', error);
      throw error;
    }
  },

  update: async (id, benefit) => {
    try {
      const response = await api.put(`/benefits/${id}`, benefit);
      return response.data;
    } catch (error) {
      console.error('Error updating benefit:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/benefits/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting benefit:', error);
      throw error;
    }
  },
};