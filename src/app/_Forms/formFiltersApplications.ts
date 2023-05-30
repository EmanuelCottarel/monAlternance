import {FormControl, FormGroup, Validators} from "@angular/forms";

export const filtersForm: FormGroup = new FormGroup({
  companyName: new FormControl(),
  status: new FormControl()
})
