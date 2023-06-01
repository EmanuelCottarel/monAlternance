import {Component, EventEmitter, Output} from '@angular/core';
import {ApplicationFilters} from "../_Interfaces/applicationFilters";
import {filtersForm} from "../_Forms/formFiltersApplications";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-application-filters',
  templateUrl: './application-filters.component.html',
})
export class ApplicationFiltersComponent {

  filtersForm: FormGroup = filtersForm

  @Output() filterDataEvent = new EventEmitter();

  sendSearchFilter() {
    this.filterDataEvent.emit(this.filtersForm.value)
    console.log(this.filtersForm.value)
  }

}
