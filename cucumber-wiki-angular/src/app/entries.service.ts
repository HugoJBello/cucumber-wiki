import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient, private config: ConfigService) { }
  urlBackend = this.config.urlBackend;
  // urlBackend = 'http://hbello.info';


  async getEntry(title: string): Promise<Object> {
    return await this.http.get(this.urlBackend + '/entries/entry/name=' + title, this.getHeaders()).toPromise();
  }

  async getEntries(limit: number, skip: number): Promise<any> {
    return await this.http.get(this.urlBackend + '/entries/entries_list/limit=' + limit + '&skip=' + skip, this.getHeaders()).toPromise();
  }

  async findEntries(text: string, limit: number, skip: number): Promise<any> {
    return await this.http.get(this.urlBackend + '/entries/find/text='
      + text + '&limit=' + limit + '&skip=' + skip, this.getHeaders()).toPromise();
  }

  async getEntriesSort(limit: number, skip: number, sort: string, order: string): Promise<any> {
    return await this.http.get(this.urlBackend + '/entries/entries_list/limit=' + limit + '&skip='
      + skip + '&sort=' + sort + '&order=' + order, this.getHeaders()).toPromise();
  }

  async saveEntry(entry: EntryDTO): Promise<Object> {
    return await this.http.post(this.urlBackend + '/entries/edit_entry', entry, this.getHeaders()).toPromise();
  }

  async deleteEntry(entryName: string): Promise<Object> {
    return await this.http.get(this.urlBackend + '/entries/delete_entry/name=' + entryName, this.getHeaders()).toPromise();
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
  }
}



export class EntryDTO {
  _id: string;
  name?: string;
  title: string;
  updated_at: Date;
  created_at: Date;
  content: string;
  tags?: string[];
  edited_by?: string;
  created_by: string;
  hidden: boolean;
  app_id?: string;
}
