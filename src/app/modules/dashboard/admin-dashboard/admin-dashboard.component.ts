import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { AddLabelComponent } from './add-label/add-label.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  imageForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;
  items:any
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,public dialog: MatDialog) {
    this.imageForm = this.formBuilder.group({
      label: [''],
      image: ['']
    });
  }
  ngOnInit(){
   this.getLabel();
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.imageForm.patchValue({
      image:file
    })
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
  
      let postData = JSON.parse(JSON.stringify(this.imageForm.value));
      delete postData.image;

      let formData= new FormData();
      formData.append('image',this.imageForm.value.image);
      // formData.append('payload',JSON.stringify(postData))
      debugger
      this.apiService.postRequest('dashboard/image',formData).subscribe(reponse => {
        console.log(reponse)
        });
      this.imageForm.reset();
      this.selectedImage = null;
      
  }

  onCheckboxChange(item: any) {
    // Handle checkbox change for the selected item
    console.log(item); // You can perform actions based on the selected state
  }
  anySelected() {
    return this.items.some(item => item.selected);
  }

  deleteSelected() {
    // this.items = this.items.filter(item => !item.selected);
    let items = this.items.filter(item => item.selected);
    let postData = JSON.parse(JSON.stringify({data:items}));
    debugger
    this.apiService.deleteRequest('dashboard/label',postData).subscribe((sResponse) => {
      console.log(sResponse)
      this.getLabel();
    })
  }
  addlabel(){
    const dialogRef = this.dialog.open(AddLabelComponent, { data: { details: null } });
    dialogRef.afterClosed().subscribe(result => {
      this.getLabel();

    });;
  }
  getLabel(){
    this.apiService.getRequest('dashboard/label').subscribe((sResponse) => {
      this.items = sResponse.data;
      // this.dataSource = new MatTableDataSource<any>(sResponse.data);
      // this.dataSource.paginator = this.paginator;
    })
  }
  addImage(){

  }
}
