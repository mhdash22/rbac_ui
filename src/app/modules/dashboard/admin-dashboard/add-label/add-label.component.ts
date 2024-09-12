import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent {
  labelForm:any;
  details:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService : ApiService, private dialogReference: MatDialogRef<AddLabelComponent>){
    this.labelForm= new FormGroup({
      label :new FormControl('',[Validators.required]),
     })
     this.details=this.data.details;
  }
  
  onSubmit(){
    debugger
    let postData = JSON.parse(JSON.stringify(this.labelForm.value));
    console.log(this.details)
      this.apiService.postRequest('dashboard/label',postData).subscribe(reponse => {
        this.dialogReference.close("Updated");
        });
      }
    
    
}
