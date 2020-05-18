import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Solicitation } from 'src/app/models/solicitation';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-approve-solicitation',
  templateUrl: './approve-solicitation.component.html',
  styleUrls: ['./approve-solicitation.component.css']
})
export class ApproveSolicitationComponent implements OnInit {

  solicitationToEdit: Solicitation = new Solicitation();
  situation: Status = Status.APROVADO;

  constructor(private solicitationService: SolicitationService,
              private route: ActivatedRoute,
              private router: Router){ }

  ngOnInit(): void {
    this.solicitationService.getSolicitationById(this.route.snapshot.paramMap.get('id'))
    .subscribe(solicitation => this.solicitationToEdit = solicitation);
  }


  closeEdit(){
    this.router.navigate(["/solicitations"]);
  }

  changeOption(situation: Status) {
    this.situation = situation;
  }

  updateSolicitation(){
    this.solicitationToEdit.status = this.situation;
    this.solicitationService.updateSolicitation(this.solicitationToEdit)
    .subscribe(data => this.onReturn(data), error => console.log(error));
  }

  onReturn(data: Object){
    console.log(data);
    this.closeEdit();
  }

  pendingStatus(status: Status): boolean{
    return status === Status.PENDENTE;
  }

}
