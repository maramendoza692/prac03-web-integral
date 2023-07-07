import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  data: any ={};

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    this.authService.tokenData$.subscribe((data:any)=>{
      this.data=data;
    });
  }

  onLogout() {
    this.authService.logout();
    this.data=null;
  }
  

}
