import axiosInstance from './interceptor';

export const getParking = async () => {
  try {
    const response = await axiosInstance.get('/getParkingData');
    return response.data;
  } catch (error) {
    console.error('Error fetching parking data:', error);
    throw error;
  }
};

export const postParking = async (car, strategy) => {
  try {
    const response = await axiosInstance.post('/park', car, { params: { strategy } });
    return response.data;
  } catch (error) {
    console.error('Error posting parking data:', error);
    throw error;
  }
};

export const postFetch = async (ticket) => {
  try {
    const response = await axiosInstance.post('/fetch', ticket);
    return response.data;
  } catch (error) {
    console.error('Error posting fetch data:', error);
    throw error;
  }
};