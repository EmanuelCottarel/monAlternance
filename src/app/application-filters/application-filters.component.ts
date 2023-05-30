import {Component, EventEmitter, Output} from '@angular/core';
import {ApplicationFilters} from "../_Interfaces/applicationFilters";
import {filtersForm} from "../_Forms/formFiltersApplications";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-application-filters',
  templateUrl: './application-filters.component.html',
})
export class ApplicationFiltersComponent {

  filters: ApplicationFilters = {
    status: null,
    companyName: null,
  }

  filtersForm: FormGroup = filtersForm

  test() {
    console.log(this.filters)
  }

  @Output() filterDataEvent = new EventEmitter();

  sendSearchFilter() {
    this.filterDataEvent.emit(this.filtersForm.value)
    console.log(this.filtersForm.value)
  }

  protected readonly console = console;

}
