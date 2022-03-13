import {UserProfile} from '../api/types';

export interface AuthenticationState {
  onAuthenticate: () => Promise<void>;
  user?: UserProfile | null;
  onLogout: () => Promise<void>;
}
