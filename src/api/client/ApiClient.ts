import {Resource} from './types';

export class ApiClient {
  constructor(private apiUrl: string, private performRequest = fetch) {}

  public async request<T>({
    resource,
    pathParams = {},
  }: {
    resource: Resource;
    pathParams?: Record<string, string | number>;
  }): Promise<T> {
    const modifiedPath = Object.entries(pathParams).reduce(
      (result, [key, value]) => result.replace(`{${key}}`, String(value)),
      resource.path,
    );

    const response = await this.performRequest(
      `${this.apiUrl}${modifiedPath}`,
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
