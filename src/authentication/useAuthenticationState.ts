import React from 'react';
import {AuthenticationContext} from './AuthenticationContext';

export function useAuthenticationState() {
  return React.useContext(AuthenticationContext);
}
