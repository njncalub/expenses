import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { StateGroup, MwsStatesService } from '../../services/states.service';

@Component({
  selector: 'mws-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class MwsSearchbarComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    searchGroup: '',
  });

  searchGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder,
              private statesService: MwsStatesService) { }

  ngOnInit(): void {
    this.searchGroupOptions = this.getValueChanges(this.searchForm,
                                                   'searchGroup')
      .pipe(
        startWith(''),
        map(name => this.filterGroup(name))
      );
  }

  getValueChanges(instance: FormGroup | undefined,
                  key: string): Observable<any> {
    if (instance !== undefined) {
        return instance.get('searchGroup').valueChanges;
    }
  }

  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.statesService.getStateGroups()
        .map(group => ({ letter: group.letter,
                         names: this._filter(group.names, val) }))
        .filter(group => group.names.length > 0);
    }

    return this.statesService.getStateGroups();
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}
