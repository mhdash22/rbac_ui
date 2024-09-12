import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { AssignLabelComponent } from './assign-label/assign-label.component';

@Component({
  selector: 'app-base-dashboard',
  templateUrl: './base-dashboard.component.html',
  styleUrls: ['./base-dashboard.component.scss']
})
export class BaseDashboardComponent {
  
  cards:any;

  constructor(private apiService: ApiService,public dialog: MatDialog){
  }
  assignLabel(data:any) {
    const dialogRef = this.dialog.open(AssignLabelComponent, { data: { details: data } });
    dialogRef.afterClosed().subscribe(result => {
      this.getImage();

    });;
  }
  
  ngOnInit(){
    this.getImage()
  }
  getImage(){
    this.apiService.getRequest('dashboard/image').subscribe((sResponse) => {
      this.cards = sResponse.data;
      // this.dataSource = new MatTableDataSource<any>(sResponse.data);
      // this.dataSource.paginator = this.paginator;
    })
  }
  


}
