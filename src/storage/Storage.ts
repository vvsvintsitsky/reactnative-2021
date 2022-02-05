import {AsyncStorage, NativeStorage} from './types';

export class Storage implements AsyncStorage {
  constructor(
    private storageKeyPrefix: string,
    private asyncStorage: NativeStorage,
  ) {}

  async getItem<T>(key: string): Promise<T | null> {
    const data = await this.asyncStorage.getItem(this.getItemKey(key));

    if (data === null) {
      return data;
    }

    return JSON.parse(data);
  }

  async setItem<T>(key: string, item: T): Promise<void> {
    return this.asyncStorage.setItem(
      this.getItemKey(key),
      JSON.stringify(item),
    );
  }

  private getItemKey(key: string) {
    return this.storageKeyPrefix.concat(`_${key}`);
  }
}
