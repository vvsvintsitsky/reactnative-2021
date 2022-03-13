export interface AsyncStorage {
  setItem<T>(key: string, item: T): Promise<void>;
  getItem<T>(key: string): Promise<T | null>;
}

export interface NativeStorage {
  setItem(key: string, item: string | null): Promise<void>;
  getItem(key: string): Promise<string | null>;
}
