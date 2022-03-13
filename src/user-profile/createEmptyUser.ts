import {ID, UserProfile} from '../api/types';

export function createEmptyUser(id: ID = ''): UserProfile {
  return {
    id,
    city: '',
    flatNumber: '',
    locality: '',
    name: '',
    phoneNumber: '',
    imageUrl: '',
  };
}
