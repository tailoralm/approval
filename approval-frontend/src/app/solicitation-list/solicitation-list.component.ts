import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { SolicitationService } from "../solicitation.service";
import { Solicitation } from "../solicitation";
import { Status } from '../status';

@Component({
  selector: 'app-solicitation-list',
  templateUrl: './solicitation-list.component.html',
  styleUrls: ['./solicitation-list.component.css']
})
export class SolicitationListComponent implements OnInit {

  solicitations: Observable<Solicitation[]>;

  constructor (private solicitationService: SolicitationService,
    private router: Router){}

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.solicitations = this.solicitationService.getSolicitationsList();
  }

  solicitationDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSolicitation(solicitation: Solicitation, approved: boolean){
    if(approved)
      solicitation.status = Status.APPROVED;
     else
      solicitation.status = Status.REJECTED;

    this.solicitationService.updateSolicitation(solicitation)
    .subscribe(data => console.log(data), error => console.log(error));

    this.reloadData();
  }

}
