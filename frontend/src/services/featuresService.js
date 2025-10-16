import api from './api';

export const featuresService = {
  getAll: async () => {
    try {
      const response = await api.get('/features');
      return response.data;
    } catch (error) {
      console.error('Error fetching features:', error);
      throw error;
    }
  },

  create: async (feature) => {
    try {
      const response = await api.post('/features', feature);
      return response.data;
    } catch (error) {
      console.error('Error creating feature:', error);
      throw error;
    }
  },

  update: async (id, feature) => {
    try {
      const response = await api.put(`/features/${id}`, feature);
      return response.data;
    } catch (error) {
      console.error('Error updating feature:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/features/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting feature:', error);
      throw error;
    }
  },
};