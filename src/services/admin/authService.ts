// Simple admin authentication service
// In production, this should be replaced with a proper backend auth system

const ADMIN_PASSWORD_KEY = 'springs_admin_password';
const ADMIN_SESSION_KEY = 'springs_admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Default password - CHANGE THIS in production!
const DEFAULT_PASSWORD = 'Springs2025Admin!';

export interface AdminSession {
  authenticated: boolean;
  expiresAt: number;
}

export const adminAuth = {
  // Check if there's a valid session
  isAuthenticated(): boolean {
    const sessionData = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!sessionData) return false;

    try {
      const session: AdminSession = JSON.parse(sessionData);
      return session.authenticated && Date.now() < session.expiresAt;
    } catch {
      return false;
    }
  },

  // Login with password
  login(password: string): boolean {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    
    if (password === storedPassword) {
      const session: AdminSession = {
        authenticated: true,
        expiresAt: Date.now() + SESSION_DURATION,
      };
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
      return true;
    }
    return false;
  },

  // Logout
  logout(): void {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  },

  // Change password (requires current password)
  changePassword(currentPassword: string, newPassword: string): boolean {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
    
    if (currentPassword === storedPassword) {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
      return true;
    }
    return false;
  },

  // Get current password (for display purposes only in dev)
  getCurrentPassword(): string {
    return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
  }
};

