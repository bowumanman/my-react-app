import api from './api';
import apiHttp from '../apiHttp';
export default {
    login: async (params) => {
        const res = await apiHttp(api.LOGIN, params);
        return res;
    }
}