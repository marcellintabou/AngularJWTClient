import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number = 0;
  user:any={"username": "admin", "password": "1234"}
  constructor(private authService: AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){ 
    this.authService.login(user)
      .subscribe(resp =>{
        console.log("ok"); 
                
        let jwt = resp.headers.get('Authorization');
        console.log(resp);
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/specialistes");
      }, error =>{
        console.log("noooo"); 
          console.log(error);
          this.mode = 1;
      })
  }
}
