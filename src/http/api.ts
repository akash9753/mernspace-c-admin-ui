import { CreateUserData, Credentials } from '../types';
import { api } from './client';

// Auth service
export const login = (credentials: Credentials) => api.post('/auth/login', credentials);
export const self = () => api.get('/auth/self');
export const logout = () => api.post('/auth/logout');

//users
export const getUsers = () => api.get('/users');
export const createUser = (user: CreateUserData) => api.post('/users', user);

//tenants
export const getTenants = () => api.get('/tenants');
