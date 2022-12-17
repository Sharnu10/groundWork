import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CustomButtonComponent } from '../form-core/custom-formly/custom-formly-types/custom-button/custom-button.component';

@Component({
  selector: 'groundwork-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'flex-layout',
      templateOptions: {
        fxLayout: 'row',
      },
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'loginUser',
          type: 'input',
          className: 'flex-12',
          templateOptions: {
            required: true,
            placeholder: 'Enter login user...',
          },
        },
        {
          key: 'password',
          type: 'input',
          className: 'flex-4',
          templateOptions: {
            required: true,
            placeholder: 'Enter login password',
            type: 'password',
          },
        },
        { className: 'flex-1' },
        {
          key: 'rememberMe',
          className: 'flex-2',
          type: 'checkbox',
          templateOptions: {
            label: 'Remember Me',
          },
        },
        {
          key: 'cust-input',
          type: CustomButtonComponent,
        },
        // {
        //   key: 'forgotPassword',
        // },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
