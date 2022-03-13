export enum Methods {
  Get = 'GET',
}

export interface Resource {
  path: string;
  method: Methods;
}
