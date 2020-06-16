import api from './api';
import apiHttp from '../apiHttp';
export default {
    login: async (params, p) => {
        const res = await apiHttp(api.LOGIN, params, p);
        return res;
    }
}