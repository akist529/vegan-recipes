import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  ROOT_URL = 'http://localhost:8000';

  constructor() { }

  httpHeader = {
    'Content-Type': 'application/json'
  }

  async getRecipes (query: string, page: number, count: number): Promise<any> {
    const data = await fetch(`${this.ROOT_URL}/recipes?query=${query}&page=${page}&count=${count}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await data.json() ?? [];
  } 
}
