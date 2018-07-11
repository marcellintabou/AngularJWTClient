import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-new-specialiste',
  templateUrl: './new-specialiste.component.html',
  styleUrls: ['./new-specialiste.component.css']
})
export class NewSpecialisteComponent implements OnInit {
  specialiste:any;
  mode:number = 0;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  onSaveSpecialiste(specialiste){
    this.authService.saveSpecialiste(specialiste)
        // .subscribe(resp =>{
        //   this.specialiste = resp;
        //   this.mode = 2;
        // }, err=>{
        //   this.mode = 0;
        // })
  }
}
