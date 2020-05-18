import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { Solicitation } from 'src/app/models/solicitation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-solicitation',
  templateUrl: './create-solicitation.component.html',
  styleUrls: ['./create-solicitation.component.css']
})
export class CreateSolicitationComponent implements OnInit {

  solicitation: Solicitation = new Solicitation();
  submitted = false;
  submittedSuccess = false;

  constructor(private solicitationService: SolicitationService, private router: Router) { }

  ngOnInit(): void {  }

  newSolicitation(): void {
    this.submitted = false;
    this.solicitation = new Solicitation();
  }

  tryAgain(): void {
    this.submitted = false;
    this.submittedSuccess = false;
  }

  onSubmit(){
    this.solicitationService.createSolicitation(this.solicitation)
    .subscribe(data => this.onSuccess(data), error => this.onError(error));
    this.submitted = true;

  }

  onSuccess(data: Object){
    console.log(data);
    this.submittedSuccess = true;
  }

  onError(error: Object){
    console.log(error);
    this.submittedSuccess = false;
  }

  gotoList(){
    this.router.navigate(["/solicitations"]);
  }
}
