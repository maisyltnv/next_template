import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

const axiosPublicInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('token');
        // const language = localStorage.getItem('language') || 'en';
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        // config.headers['Accept-Language'] = language;
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.get('refresh_token');
            console.log('refreshToken', refreshToken);
            try {
                const { data } = await axiosPublicInstance.get('/token/refresh', {
                    headers: { 'Authorization': `Bearer ${refreshToken}` }
                });
                Cookies.set('token', data.data.access_token);
                Cookies.set('refresh_token', data.data.refresh_token);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // Handle token refresh error (e.g., redirect to login)
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);
export { axiosPublicInstance };
export default axiosInstance;