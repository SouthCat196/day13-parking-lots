import axiosInstance from './interceptor';

export const getParking = async () => {
  try {
    const response = await axiosInstance.get('/parking');
    return response.data;
  } catch (error) {
    console.error('Error fetching parking data:', error);
    throw error;
  }
};

export const postParking = async (parkingData) => {
  try {
    const response = await axiosInstance.post('/parking', parkingData);
    return response.data;
  } catch (error) {
    console.error('Error posting parking data:', error);
    throw error;
  }
};

export const postFetch = async (fetchData) => {
  try {
    const response = await axiosInstance.post('/fetch', fetchData);
    return response.data;
  } catch (error) {
    console.error('Error posting fetch data:', error);
    throw error;
  }
};