import React from 'react';
import {ApiClientContext} from './ApiClientContext';

export function useApiClient() {
  return React.useContext(ApiClientContext);
}
