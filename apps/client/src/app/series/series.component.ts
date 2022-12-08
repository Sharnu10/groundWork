import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'groundwork-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  series = 'Series';
  modelValues: string | undefined;
  form = new FormGroup({});
  model = {};
  // model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email...',
        placeholder: 'Enter mail',
        required: true,
      },
    },
    {
      key: 'selectKey',
      type: 'select',
      templateOptions: {
        label: 'select one of value',
        required: true,
        labelProp: 'label',
        options: [
          { label: 'Dr', value: 'dr' },
          { label: 'Mr', value: 'mr' },
          { label: 'Mrs', value: 'mrs' },
        ],
      },
      expressions: {
        hide: '!model.email',
      },
    },
  ];

  onSubmit(model: any) {
    this.modelValues = JSON.stringify(model);
  }

  clearForm() {
    this.form?.reset();
    this.modelValues = JSON.stringify(this.model);
  }

  resetForm() {
    this.form?.reset();
  }
}
