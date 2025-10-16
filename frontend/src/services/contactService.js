import api from './api';

export const contactService = {
  submit: async (contact) => {
    try {
      const response = await api.post('/contact', contact);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },

  getAll: async () => {
    try {
      const response = await api.get('/contact');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  update: async (id, status) => {
    try {
      const response = await api.put(`/contact/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating contact:', error);
      throw error;
    }
  },
};