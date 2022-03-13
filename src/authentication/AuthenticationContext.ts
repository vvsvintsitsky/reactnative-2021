import React from 'react';
import {AuthenticationState} from './types';

export const AuthenticationContext = React.createContext<AuthenticationState>({
  user: undefined,
  onAuthenticate: () => {
    throw new Error('not implemented');
  },
  onLogout: () => {
    throw new Error('not implemented');
  },
});
