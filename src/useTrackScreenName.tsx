import {useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export function useTrackScreenName({
  onRouteChange,
}: {
  onRouteChange: (routeName: string | undefined) => void;
}) {
  const navigationContainerRef = useNavigationContainerRef();
  const previousRouteRef = React.useRef<string | undefined>();

  return React.useCallback(() => {
    const currentRoute = navigationContainerRef.getCurrentRoute()?.name;
    if (previousRouteRef.current !== currentRoute) {
      previousRouteRef.current = currentRoute;
      onRouteChange(currentRoute);
    }
  }, [onRouteChange, navigationContainerRef]);
}
