import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = "https://fakestoreapi.com";

  constructor() { }

  protected getApiUrl(url: string): string {
    if (!url || url.length < 0) {
      throw new Error("Url not valid");
    }
    return `${this.API_URL}/${url}`
  }
}
