import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient) { }
  urlBackend = 'http://localhost:3000';


  async getEntry(title: string): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    return await this.http.get(this.urlBackend + '/titled/' + title, httpOptions).toPromise();
  }

  async getEntries(limit: number, skip: number): Promise<any> {
    return await this.http.get(this.urlBackend + '/entries/entries_list/limit=' + limit + '&skip=' + skip).toPromise();
  }

  async saveEntry(entry: EntryDTO): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    return await this.http.post(this.urlBackend + '/entries/edit_entry', entry, httpOptions).toPromise();
  }

}

export class EntryDTO {
  _id: string;
  name?: string;
  title: string;
  updated_at: Date;
  created_at: Date;
  content: string;
  tags: string;
  edited_by?: string;
  created_by: string;
  hidden: boolean;
  app_id?: string;
}
