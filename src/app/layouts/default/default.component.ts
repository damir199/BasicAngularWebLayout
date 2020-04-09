import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  sideBarOpen = false;
  ngOnInit(): void {
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
