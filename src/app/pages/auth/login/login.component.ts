import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseForm } from 'src/app/shared/utils/base-form';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  tokenVisible: boolean = true;
  reCAPTCHAToken: string = "";

  constructor(
    private fb: FormBuilder,
    public baseForm: BaseForm,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.recaptchaV3Service.execute('ImportantAction').subscribe((token: string) => {
      this.tokenVisible = true;
      this.reCAPTCHAToken = `Token[${token}] generated`;
    })
    //this.route.navigate(['home']);
  }
}
