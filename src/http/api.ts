import { CreateUserData, Credentials } from '../types';
import { api } from './client';

// Auth service
export const login = (credentials: Credentials) => api.post('/auth/login', credentials);
export const self = () => api.get('/auth/self');
export const logout = () => api.post('/auth/logout');

//users
// export const getUsers = () => api.get('/users');
export const getUsers = (queryString: string) => api.get(`/users?${queryString}`);
export const createUser = (user: CreateUserData) => api.post('/users', user);
export const updateUser = (user: CreateUserData, id: string) => api.patch(`/users/${id}`, user);

//tenants
export const getTenants = () => api.get('/tenants');
