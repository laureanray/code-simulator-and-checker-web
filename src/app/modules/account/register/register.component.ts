import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../../core/services/student.service';
import {Student} from '../../../core/models';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMsg: string;
  hide = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required]
    });
  }


  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    const student = new Student();

    student.firstName = this.f.firstName.value;
    student.lastName = this.f.lastName.value;
    student.email = this.f.email.value;
    student.username = this.f.username.value;
    student.password = this.f.password.value;

    this.studentService
      .registerStudent(student)
      .subscribe(data => {
      console.log(data);
    });
  }

}
