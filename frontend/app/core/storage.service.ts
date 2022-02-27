import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/all-dtos';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null; 

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage
  }

  public set(key: string, value: User){
    this._storage?.set(key, value);
  }

  public get(key: string): any{
    return this._storage?.get(key);
  }

  public remove(key: string){
    this._storage?.remove(key);
  }
}
