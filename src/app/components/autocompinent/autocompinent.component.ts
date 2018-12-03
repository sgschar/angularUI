import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocompinent',
  templateUrl: './autocompinent.component.html',
  styleUrls: ['./autocompinent.component.css']
})
export class AutocompinentComponent implements OnInit {
  myControl = new FormControl('');
  myGroup = new FormGroup({auto:this.myControl});
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.myControl.setValue("One");
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
