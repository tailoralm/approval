import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Solicitation } from 'src/app/models/solicitation';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-solicitation-list',
  templateUrl: './solicitation-list.component.html',
  styleUrls: ['./solicitation-list.component.css']
})
export class SolicitationListComponent implements OnInit {

  solicitations: Observable<Solicitation[]>;
  nameToSearch = '';
  descToSearch = '';

  constructor(private solicitationService: SolicitationService,
              private router: Router){}

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.solicitations = this.solicitationService.getSolicitationsList();
  }

  getApprovedList() {
    this.solicitations = this.solicitationService.getApprovedSolicitations();
  }

  getRejectedList() {
    this.solicitations = this.solicitationService.getRejectedSolicitations();
  }

  getPendingList() {
    this.solicitations = this.solicitationService.getPendingSolicitations();
  }

  getSolicitationsByName() {
    if (this.nameToSearch !== ''){
      this.solicitations = this.solicitationService.getSolicitationByName(this.nameToSearch);
      this.descToSearch = '';
    } else {
      this.reloadData();
    }
  }

  getSolicitationsByDesc() {
    if (this.descToSearch !== ''){
      this.solicitations = this.solicitationService.getSolicitationByDesc(this.descToSearch);
      this.nameToSearch = '';
    } else {
      this.reloadData();
    }
  }

  pendingStatus(status: Status): boolean{
    return status === Status.PENDENTE;
  }


}
