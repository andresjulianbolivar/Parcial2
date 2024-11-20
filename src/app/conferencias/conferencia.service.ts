import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Conferencia } from './conferencia';
@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getConferencias(): Observable<Conferencia[]> {
  return this.http.get<Conferencia[]>(this.apiUrl);
}

}
