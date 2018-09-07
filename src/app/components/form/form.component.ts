import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //forms
import { Router } from '@angular/router'; //routing
import { FormService } from '../../services/form.service'; //service
import { ValidateDate } from '../../validators/date.validator'; //custom validator for date

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm: FormGroup;
  countries = ['Singapore', 'Malaysia', 'Indonesia', 'Philippines'];
  genders = ['Male', 'Female'];
  createFormGroup() {
    return new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.email //reg for email inbuilt
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('(?=.*[!#$%^&*()`~].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*).{8,}') //reg for at least one special char, one capital, one number and 8 min chars
        ]),
        name: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        dob: new FormControl('', [
          Validators.required,
          ValidateDate
        ]),
        address: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        contact: new FormControl('', [
          Validators.required,
          Validators.pattern('([-+ ()0-9]{5})([ 0-9]{3,})'), //reg for first 5 digits accept -,+, ,(,) and number. rest only numbers or space
        ]),
        text: new FormControl()
    });
  }

  //validator checks called from html for reactive forms
  get email() { return this.contactForm.get('email'); }
  get password() { return this.contactForm.get('password'); }
  get name() { return this.contactForm.get('name'); }
  get gender() { return this.contactForm.get('gender'); }
  get dob() { return this.contactForm.get('dob'); }
  get address() { return this.contactForm.get('address'); }
  get country() { return this.contactForm.get('country'); }
  get contact() { return this.contactForm.get('contact'); }

  constructor(private formSvc: FormService,
    private route: Router) {
    this.contactForm = this.createFormGroup();
    }


  //reset button
  reset() {
    this.contactForm.reset();
  }

  //submit button
  onSubmit () {
    console.log ('Form data: ', this.contactForm.value);
    this.formSvc
      .submitForm(this.contactForm.value)
      .subscribe((result)=>{
        console.log(result);
      });
    this.route.navigate(['/submitted']) //redirect to submitted
  }

  ngOnInit() {
  }

}
