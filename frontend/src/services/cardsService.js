import api from './api';

export const cardsService = {
  getAll: async () => {
    try {
      const response = await api.get('/cards');
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  },

  getOne: async (id) => {
    try {
      const response = await api.get(`/cards/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching card:', error);
      throw error;
    }
  },

  create: async (card) => {
    try {
      const response = await api.post('/cards', card);
      return response.data;
    } catch (error) {
      console.error('Error creating card:', error);
      throw error;
    }
  },

  update: async (id, card) => {
    try {
      const response = await api.put(`/cards/${id}`, card);
      return response.data;
    } catch (error) {
      console.error('Error updating card:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/cards/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting card:', error);
      throw error;
    }
  },
};