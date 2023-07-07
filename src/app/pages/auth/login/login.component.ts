import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BaseForm } from 'src/app/shared/utils/base-form';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthResponse } from 'src/app/shared/models/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  tokenVisible: boolean = true;
  reCAPTCHAToken: string ="";


  constructor(private fb : FormBuilder, public baseForm:BaseForm, public router:Router,
    private recapchaV3Service:ReCaptchaV3Service, private aurhService:AuthService
    ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(3)]]
    });
  }

  onLogin() {
    /*
    this.recapchaV3Service.execute('importantAction').subscribe((token:string)=>{
      this.tokenVisible=true;
      this.reCAPTCHAToken = `Token [${token}] generated`;
    })*/
    //this.router.navigate(['/home']);
    if(this.loginForm.invalid) return;

    //Obtener la información delformulario y se almacenará en la variable 'form'
    const form  = this.loginForm.value;
    /*this.authSvc.login(form).subscribe((data: AuthReponse | void) => {

    });*/
    this.aurhService.login(form).subscribe((data: AuthResponse | void) => {});

    console.log("OnLogin() Method", form);
  }

}
