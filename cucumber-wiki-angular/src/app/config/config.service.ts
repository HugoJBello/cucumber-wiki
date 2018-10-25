import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEFAULT_CONFIG } from './DEFAULT_CONFIG';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  urlBackend: string;
  constructor(private http: HttpClient) {
    // harcoded for the time being
    this.urlBackend = DEFAULT_CONFIG.backendUrl;
  }

  async getConfig(): Promise<Object> {
    return await this.http.get(this.urlBackend + '/config/basic_configuration', this.getHeaders()).toPromise();
  }
  getHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
  }
}


export interface CONFIG {
  backendUrl: string;
}
