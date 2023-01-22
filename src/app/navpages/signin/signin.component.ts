import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PassWordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registerForm!:FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['',[Validators.required, Validators.minLength(10)]],
    },{

        Validators: PassWordsMatchValidator('password','confirmPassword')

    });

    this.returnUrl = this. activatedRoute.snapshot.queryParams.returnUrl;

  }

  get fc() {
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv= this.registerForm.value;
    const user :IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confrimPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userServices.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

}
