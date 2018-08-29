import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: fuseAnimations
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginFormErrors: any;
  app_key: string;
  redirect_uri: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   * @param {_httpCliend} _httpClient
   */
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient
  ) {

    this.app_key = 'a0abd437b44cfdbb646ee7805def69e8';
    this.redirect_uri = encodeURI('http://127.0.0.1:3000/api/auth/kakao');

    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        }
      }
    };

    // Set the defaults
    this.loginFormErrors = {
      email: {},
      password: {}
    };

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    this.loginForm.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.onLoginFormValuesChanged();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On form values changed
   */
  onLoginFormValuesChanged(): void {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  onFormSubmit(formValue: any): void {
    // alert(JSON.stringify(formValue, null, 2));
    this._httpClient
      .post("/api/users/", { name: formValue.email })
      .subscribe((response: any) => {
        alert("회원 추가완료");
      });
    // console.log(JSON.stringify(formValue.email, null, 2));
  }

//   onKakaoLogin(): void {
//       this._httpClient
//         .get("https://kauth.kakao.com/oauth/authorize?client_id=a0abd437b44cfdbb646ee7805def69e8&redirect_uri=/pages/auth/login&response_type=code")
//         .subscribe((response: any) => {
//             alert('1111');
//         });
//   }
}
