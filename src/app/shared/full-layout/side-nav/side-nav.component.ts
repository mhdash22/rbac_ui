import { Component } from '@angular/core';
import { SharedService } from '../../services/api/shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(private sharedService: SharedService){
    this.menulist=this.sharedService.getmenu()
  }
  menulist:any
  

  }
  