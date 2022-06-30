import { HttpClient } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  Observable,
  pluck,
  Subject,
  Subscription,
  tap
} from 'rxjs';
import { StatePeople } from 'src/app/core/enums/state-people';
import { People } from 'src/app/core/models/people';
import { VersionService } from 'src/app/core/services/version.service';
import { PeoplesService } from '../../services/peoples.service';
import {
  deletePeopleByIdAction,
  editPeoplesAction,
  getAllPeoplesAction
} from '../../store/actions/peoples.actions';
import { selectAllPeople } from '../../store/selectors/peoples.selectors';

@Component({
  selector: 'app-page-list-people',
  templateUrl: './page-list-people.component.html',
  styleUrls: ['./page-list-people.component.scss']
})
export class PageListPeoplesComponent implements OnInit {
  public titleParent = 'Alertes';
  // public collection!: Order[];
  public collection$: Observable<People[]>;
  public headers: string[];

  public titleTest = 'Le titre de mon composant';

  public userList!: any;
  public userListHeaders!: string[];
  public demoDate = new Date();

  public statePeople = StatePeople;
  public collection!: People[];

  private count = 0;
  // private subNumVersion: Subscription;

  constructor(
    private peoplesService: PeoplesService,
    private router: Router,
    private store: Store
  ) {
    this.headers = ['', '', $localize`Noms`, $localize`Descriptions`];
    this.collection$ = this.store.select(selectAllPeoples);
    this.store.dispatch(getAllPeoplesAction());
  }
  ngOnInit(): void {}

  public onChangeState(people: People, event: any): void {
    const peopleToUpdate = new People({ ...people, state: event.target.value });
    this.store.dispatch(editPeoplesAction({ peopleToUpdate }));
  }

  public onClickGoToEdit(people: People): void {
    // redirection vers une url du type /orders/edit/order.id
    // this.router.navigate(['orders', 'edit', order.id]);
    this.router.navigateByUrl(`/listpeople/edit/${people.id}`);
  }

  public onClickDelete(people: People): void {
    this.store.dispatch(deletePeopleByIdAction({ id: people.id }));
  }

  ngOnDestroy(): void {
    console.log('Instance detruite + desinscription');
  }
}
