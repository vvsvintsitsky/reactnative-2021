import {Resource} from './types';

export class ApiClient {
  constructor(private apiUrl: string, private performRequest = fetch) {}

  public async request<T>(resource: Resource): Promise<T> {
    const response = await this.performRequest(
      `${this.apiUrl}${resource.path}`,
      {
        method: resource.method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to perform request');
    }

    return response.json();
  }
}
