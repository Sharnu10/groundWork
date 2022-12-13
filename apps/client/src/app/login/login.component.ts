import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
      // type: 'flex-layout',
      // templateOptions: {
      //   fxLayout: 'row',
      // },
      fieldGroup: [
        {
          key: 'loginUser',
          type: 'input',
          className: 'flex-2',
          templateOptions: {
            required: true,
            placeholder: 'Enter login user...',
          },
        },
        {
          key: 'password',
          type: 'input',
          className: 'flex-8',
          templateOptions: {
            required: true,
            placeholder: 'Enter login password',
            type: 'password',
          },
        },
        { className: 'flex-12' },
        {
          key: 'rememberMe',
          type: 'checkbox',
          templateOptions: {
            label: 'Remenber Me',
          },
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
