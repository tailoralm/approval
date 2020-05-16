import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitation } from './solicitation';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  private baseUrl = 'http://localhost:8080/approvalApi/solicitations';

  constructor(private http: HttpClient) { }


  getSolicitationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get`);
  }

  getSolicitation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  createSolicitation(solicitation: Solicitation): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, solicitation);
  }

  updateSolicitation(solicitation: Solicitation): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${solicitation.id}`, solicitation);
  }


}
