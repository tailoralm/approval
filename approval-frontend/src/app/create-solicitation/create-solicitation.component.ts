import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitationService } from '../solicitation.service';
import { Solicitation } from '../solicitation';

@Component({
  selector: 'app-create-solicitation',
  templateUrl: './create-solicitation.component.html',
  styleUrls: ['./create-solicitation.component.css']
})
export class CreateSolicitationComponent implements OnInit {

  solicitation: Solicitation = new Solicitation();
  submitted = false;

  constructor(private solicitationService: SolicitationService, private router: Router) { }

  ngOnInit(): void {

  }

  newSolicitation(): void {
    this.submitted = false;
    this.solicitation = new Solicitation();
  }

  save(){
    this.solicitationService.createSolicitation(this.solicitation)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(["/solicitations"]);
  }
}
