import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { StateAlerts } from 'src/app/core/enums/state-alerts';
import { Alert } from 'src/app/core/models/alerts';

@Component({
  selector: 'app-form-alert',
  templateUrl: './form-alert.component.html',
  styleUrls: ['./form-alert.component.scss']
})
export class FormAlertComponent implements OnInit, OnChanges {
  public states = StateAlerts;
  @Input() init!: Alert;
  public form!: FormGroup;
  @Output() submitted = new EventEmitter<Alert>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // V1 à la manière de la doc
    // this.form = new FormGroup({
    //   tjmHt: new FormControl(this.init.tjmHt),
    //   typePresta: new FormControl(this.init.typePresta, Validators.required),
    //   nbJours: new FormControl(this.init.nbJours),
    //   client: new FormControl(this.init.client, [Validators.required, Validators.minLength(2)]),
    //   tva: new FormControl(this.init.tva),
    //   state: new FormControl(this.init.state),
    //   comment: new FormControl(this.init.comment)
    // });
    // manière concise
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.fb.group({
      noms: [this.init.noms],
      descriptions: [this.init.descriptions, Validators.required],
      state: [this.init.state],
      id: [this.init.id]
    });
  }

  public onSubmit(): void {
    console.log('Formulaire : ', this.form);
    console.log('Formulaire a été soumis : ', this.form.value);

    this.submitted.emit(this.form.value);
  }
}
