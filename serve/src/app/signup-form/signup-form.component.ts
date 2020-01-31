import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')

    })
  })
  
  get username() { //Shortens our code in the HTML file.
    return this.form.get('account.username');
  }
  // form = new FormGroup({ // Validators has various methos aside from required.
  //   username: new FormControl('', [
  //     Validators.required, 
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace
  //   ], UsernameValidators.shouldBeUnique
  //   ),

  //   password: new FormControl('', Validators.required)
  // });

  // login() {
  //     this.form.setErrors({
  //       invalidLogin: true
  //     });
  // }

}