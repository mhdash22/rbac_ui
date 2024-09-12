import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { SharedService } from 'src/app/shared/services/api/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder,private router: Router,private sharedService:SharedService,private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    let postData = JSON.parse(JSON.stringify(this.loginForm.value));
    this.authService.login('/login',postData.email,postData.password);
  }

}
