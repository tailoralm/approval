import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitationService } from '../solicitation.service';
import { Solicitation } from '../solicitation';
import { Status } from '../status';

@Component({
  selector: 'app-approve-solicitation',
  templateUrl: './approve-solicitation.component.html',
  styleUrls: ['./approve-solicitation.component.css']
})
export class ApproveSolicitationComponent implements OnInit {

  solicitationToEdit: Solicitation = new Solicitation();

  constructor(private solicitationService: SolicitationService,
              private route: ActivatedRoute,
              private router: Router){ }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
    // this.solicitationService.getSolicitationById(id).subscribe(solicitation => this.solicitationToEdit = solicitation);
  }


  closeEdit(){

  }

  pendingSolicitation(): boolean{
    return this.solicitationToEdit.status === Status.PENDING;
  }

  changeOption(status: Status) {
    this.solicitationToEdit.status === status;
  }

  updateSolicitation(){
    this.solicitationService.updateSolicitation(this.solicitationToEdit)
    .subscribe(data => this.onReturn(data), error => console.log(error));
  }

  onReturn(data: Object){
    console.log(data);
    this.closeEdit();
  }

}
