import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialiste',
  templateUrl: './specialiste.component.html',
  styleUrls: ['./specialiste.component.css']
})
export class SpecialisteComponent implements OnInit {
  specialistes;
  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getSpecialistes()
        // .subscribe(data =>{
      	//   this.specialistes = data;
        // }, err =>{
        //     this.authService.logout();
        //     this.router.navigateByUrl("/login")
        // })
  }

  onNewSpecialiste(){
    this.router.navigateByUrl("/new-specialiste");
  }

}
