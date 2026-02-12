import type { User } from '../types';

export async function getCurrentUser(): Promise<User | null> {
  try {
    const userStr = localStorage.getItem('edl_user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function login(username: string, password: string): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User = {
        id: '1',
        username,
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@edl.lk`,
        department: 'Distribution',
        role: 'Employee'
      };
      localStorage.setItem('edl_user', JSON.stringify(user));
      resolve(user);
    }, 500);
  });
}

export function logout(): void {
  localStorage.removeItem('edl_user');
}
