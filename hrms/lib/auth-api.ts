import { LoginRequest, LoginResponse, Employee } from '@/types/auth-types';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

export const logout = async (): Promise<void> => {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });
};

export const getCurrentUser = async (): Promise<Employee> => {
  const response = await fetch('/api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch user data');
  }

  return response.json();
};
