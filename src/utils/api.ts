import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.AXIOS_BASE_URL || "",
  timeout: 5000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json',
    // Add all custom headers here
  },
});

const fetchData = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

const addData = async (url: string, data: any, options: AxiosRequestConfig = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options);
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    throw new Error('Could not add data');
  }
};

export { fetchData, addData };