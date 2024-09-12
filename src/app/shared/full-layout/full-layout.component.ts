import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent {

  mobileQuery: MediaQueryList;
  dir = 'ltr';
  green: boolean;
  blue: boolean;
  dark: boolean;
  minisidebar: boolean = true;
  boxed: boolean;
  danger: boolean;
  showHide: boolean;
  sidebarOpened;
  //showSidebar: boolean = true;
  public userDetails: any;

  private _mobileQueryListener: () => void;
  public checkUrl:string | undefined;
    constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
