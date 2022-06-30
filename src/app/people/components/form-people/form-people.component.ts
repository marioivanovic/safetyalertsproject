import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatePeople } from 'src/app/core/enums/state-people';

import { People } from 'src/app/core/models/people';
import { PeoplesService } from '../../services/peoples.service';

@Component({
  selector: 'app-form-people',
  templateUrl: './form-people.component.html',
  styleUrls: ['./form-people.component.scss']
})
export class FormPeopleComponent implements OnInit {
  @Input() public init!: People;
  @Output() submitted = new EventEmitter<People>();
  public form!: FormGroup;
  public states = StatePeople;

  constructor(
    private fb: FormBuilder,
    private peoplesService: PeoplesService
  ) {
    this.peoplesService.observable$.subscribe(data => {
      this.data;
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      lastName: [
        this.init.lastName,
        [Validators.required, Validators.minLength(2)]
      ],
      firstName: [
        this.init.firstName,
        [Validators.required, Validators.minLength(2)]
      ],
      id: [this.init.id]
    });
  }

  public onSubmit(): void {
    const people = this.form.value as People;
    this.submitted.emit(people);
  }
}
