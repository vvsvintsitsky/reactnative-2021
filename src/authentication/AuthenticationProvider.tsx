import React from 'react';

import {AuthenticationContext} from './AuthenticationContext';
import {useAuthentication} from './useAuthentication';

export function AuthenticationProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const authentication = useAuthentication();
  return (
    <AuthenticationContext.Provider value={authentication}>
      {children}
    </AuthenticationContext.Provider>
  );
}
