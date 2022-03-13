import React from 'react';
import {AuthenticationState} from './types';

export function useAuthentication() {
  const [authentication, setAuthentication] =
    React.useState<AuthenticationState>(false);

  const onAuthenticate = React.useCallback(
    async (newAuthenticationState: AuthenticationState) => {
      return setAuthentication(newAuthenticationState);
    },
    [setAuthentication],
  );

  return {authentication, onAuthenticate};
}
