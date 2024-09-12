import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-assign-label',
  templateUrl: './assign-label.component.html',
  styleUrls: ['./assign-label.component.scss']
})
export class AssignLabelComponent {
  labelForm:any;
  details:any;
  labels: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService : ApiService, private dialogReference: MatDialogRef<AssignLabelComponent>){
    this.details=this.data.details;
    this.labelForm= new FormGroup({
      image_url:new FormControl(this.details.image_url),
      labels :new FormControl('',[Validators.required]),
     })
     this.details=this.data.details;
  }

  ngOnInit(){
    this.getLabel();
   }
  
  onSubmit(){
    debugger
    let postData = JSON.parse(JSON.stringify(this.labelForm.value));
    console.log(this.details)
      this.apiService.putRequestById('dashboard/image',this.details.id,postData).subscribe(reponse => {
        this.dialogReference.close("Updated");
        });
      }
    
      getLabel(){
        this.apiService.getRequest('dashboard/label').subscribe((sResponse) => {
          this.labels = sResponse.data;
          // this.dataSource = new MatTableDataSource<any>(sResponse.data);
          // this.dataSource.paginator = this.paginator;
        })
      }
  
}
