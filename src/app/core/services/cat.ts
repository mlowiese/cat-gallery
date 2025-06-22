import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatService {
  private apiKey = 'live_sXQvTnr3cdM9In1yQVBvIioEQ7NLu6AljO4wrn32Lteg8ZMlX9QmRgHWnNqizVnc'; 

  constructor(private http: HttpClient) {}

  getCats(limit = 10): Observable<any[]> {
    const headers = new HttpHeaders({ 'x-api-key': this.apiKey });
    return this.http.get<any[]>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
      { headers }
    );
  }
}