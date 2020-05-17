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


  getSolicitationsList(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.baseUrl}/get`);
  }

  getSolicitationById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getSolicitationByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/name/${name}`);
  }

  getSolicitationByDesc(desc: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/desc/${desc}`);
  }

  getApprovedSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.baseUrl}/get/approved`);
  }

  getRejectedSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.baseUrl}/get/rejected`);
  }

  getPendingSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.baseUrl}/get/pending`);
  }

  createSolicitation(solicitation: Solicitation): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, solicitation);
  }

  updateSolicitation(solicitation: Solicitation): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${solicitation.id}`, solicitation);
  }


}
