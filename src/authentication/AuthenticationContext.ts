import React from 'react';
import {AuthenticationState} from './types';

export const AuthenticationContext = React.createContext<{
  authentication: AuthenticationState;
  onAuthenticate: (state: AuthenticationState) => Promise<void>;
}>({
  authentication: false,
  onAuthenticate: () => {
    throw new Error('not implemented');
  },
});
