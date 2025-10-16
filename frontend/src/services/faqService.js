import api from './api';

export const faqService = {
  getAll: async () => {
    try {
      const response = await api.get('/faqs');
      return response.data;
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      throw error;
    }
  },

  getOne: async (id) => {
    try {
      const response = await api.get(`/faqs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching FAQ:', error);
      throw error;
    }
  },

  create: async (faq) => {
    try {
      const response = await api.post('/faqs', faq);
      return response.data;
    } catch (error) {
      console.error('Error creating FAQ:', error);
      throw error;
    }
  },

  update: async (id, faq) => {
    try {
      const response = await api.put(`/faqs/${id}`, faq);
      return response.data;
    } catch (error) {
      console.error('Error updating FAQ:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/faqs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      throw error;
    }
  },
};