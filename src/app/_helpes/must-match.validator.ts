import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    console.log(`abc:`+control.value+"|"+matchingControl.value);
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      console.log(`abc:1`);
      matchingControl.setErrors({ mustMatch: true });
    } else {
      console.log(`abc:2`);
      matchingControl.setErrors(null);
    }
  }
}
export function TestValidate(checkValue: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[checkValue];
    console.log(`ggg:`+control.value);
    if (control.errors && !control.errors.testValidate) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== 'abc') {
      console.log(`ggg:1`);
      control.setErrors({ testValidate: true });
    } else {
      console.log(`ggg:2`);
      control.setErrors(null);
    }
  }
}
