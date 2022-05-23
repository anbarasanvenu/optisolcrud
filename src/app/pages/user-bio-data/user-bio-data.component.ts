import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserbioService } from 'src/app/userbio.service';

@Component({
  selector: 'app-user-bio-data',
  templateUrl: './user-bio-data.component.html',
  styleUrls: ['./user-bio-data.component.scss']
})
export class UserBioDataComponent implements OnInit {
  userBioForm: any = FormGroup;
  submit: boolean = false;
  cityList: any[] = [];
  SateList: any [] = [];
  pincodeList: { value: string; label: string; }[] = [];
  recorddatas: any;
  AllUserList: any;
  page: number = 1;
  UserId: any;
  SingleUserData: any;
  updateId: any;
  btnShow1: boolean = true;
  btnShow2: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userbioService: UserbioService
  ) { }

  ngOnInit(): void {
    this.dropdownData();
    this.formValidation();
    this.getAllUserbioData();
  }

  formValidation() {
    this.userBioForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      qualification: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  dropdownData() {
    this.cityList = [
      { value: '1', label: 'Chennai'},
      { value: '2', label: 'Pune'},
      { value: '3', label: 'Bangalore'},
      { value: '4', label: 'Kochi'},
    ]
    this.SateList = [
      { value: '1', label: 'Tamilnadu'},
      { value: '2', label: 'Maharastra'},
      { value: '3', label: 'Karnadaka'},
      { value: '4', label: 'Kerala'},
    ];
    this.pincodeList = [
      { value: '1', label: '600001'},
      { value: '2', label: '400002'},
      { value: '3', label: '500001'},
      { value: '4', label: '700001'},
    ]
  }

  getCityname(e: any){
    console.log(e);
    if(e == 1){
      this.userBioForm.controls['state'].setValue('1');
      this.userBioForm.controls['zipCode'].setValue('1');
      this.userBioForm.controls['country'].setValue('India');
    }else if(e == 2){
      this.userBioForm.controls['state'].setValue('2');
      this.userBioForm.controls['zipCode'].setValue('2');
      this.userBioForm.controls['country'].setValue('India');
    }else if(e == 3){
      this.userBioForm.controls['state'].setValue('3');
      this.userBioForm.controls['zipCode'].setValue('3');
      this.userBioForm.controls['country'].setValue('India');
    }else{
      this.userBioForm.controls['state'].setValue('4');
      this.userBioForm.controls['zipCode'].setValue('4');
      this.userBioForm.controls['country'].setValue('India');
    }
  }

  SubmitForm(){
    this.submit = true;
    if(this.userBioForm.valid){
      var data = {
        "firstName": this.userBioForm.value.firstName,
        "lastName":this.userBioForm.value.lastName,
        "email":this.userBioForm.value.email,
        "phoneNumber":this.userBioForm.value.phoneNumber,
        "address1":this.userBioForm.value.address1,
        "address2":this.userBioForm.value.address2,
        "city":this.userBioForm.value.city,
        "state":this.userBioForm.value.state,
        "zipCode":this.userBioForm.value.zipCode,
        "country":this.userBioForm.value.country,
        "qualification":this.userBioForm.value.qualification,
        "comments":this.userBioForm.value.comments
      }
      this.userbioService.postData(data).subscribe(res => {
        this.recorddatas = res;
        alert("Successfully Submited")
        this.getAllUserbioData();
        this.submit = false;
        this.userBioForm.reset();
      })
    }else{
      alert('please fill all the required field')
    }
  }

  getAllUserbioData(){
    this.userbioService.getData().subscribe(res => {
      this.AllUserList = res;
    });
  }

  getSigleUser(e: any){
    this.userbioService.getSData(e).subscribe(res => {
      this.SingleUserData = res;
      this.page = 2;
    })
  }

  deleUser(e: any){
    this.UserId = e;
    this.userbioService.deleteUserBio(e).subscribe(res => {
      this.getAllUserbioData();
    });
  }


  goBack(){
    this.page = 1;
  }

  editAllUser(e: any){
    if(e === e){
      this.btnShow1 = false;
      this.btnShow2 = true;
    }
    console.log(e.length, ',,,,');
    this.updateId = e;
    this.userbioService.getSData(e).subscribe(res => {
      var formData = res;
      console.log(formData, 'formData');
      this.userBioForm.patchValue(formData);
    })
  }

  updateForm(){
    if(this.userBioForm.valid){
      var data = {
        "firstName": this.userBioForm.value.firstName,
        "lastName":this.userBioForm.value.lastName,
        "email":this.userBioForm.value.email,
        "phoneNumber":this.userBioForm.value.phoneNumber,
        "address1":this.userBioForm.value.address1,
        "address2":this.userBioForm.value.address2,
        "city":this.userBioForm.value.city,
        "state":this.userBioForm.value.state,
        "zipCode":this.userBioForm.value.zipCode,
        "country":this.userBioForm.value.country,
        "qualification":this.userBioForm.value.qualification,
        "comments":this.userBioForm.value.comments
      }
      this.userbioService.getupateData(data, this.updateId).subscribe(res => {
        alert("Successfully Updated");
        this.getAllUserbioData();
        this.submit = false;
        this.userBioForm.reset();
      });
    }else{
      alert("Something Went Wrong")
    }
  }
  
}
