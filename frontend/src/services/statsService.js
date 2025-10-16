import api from './api';

export const statsService = {
  get: async () => {
    try {
      const response = await api.get('/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  },

  update: async (stats) => {
    try {
      const response = await api.put('/stats', stats);
      return response.data;
    } catch (error) {
      console.error('Error updating stats:', error);
      throw error;
    }
  },
};