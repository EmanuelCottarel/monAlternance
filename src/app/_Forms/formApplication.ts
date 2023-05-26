import {FormControl, FormGroup, Validators} from "@angular/forms";

export const applicationForm: FormGroup = new FormGroup({
  companyName: new FormControl(null, Validators.required),
  submitedAt: new FormControl(),
  email: new FormControl(null,Validators.email),
  phoneNumber: new FormControl(null, [Validators.maxLength(10), Validators.minLength(10)]),
  webSite: new FormControl(),
  status: new FormControl()
})
