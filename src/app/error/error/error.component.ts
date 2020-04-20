import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

  message = "Unknown error!";
  constructor() { }

  ngOnInit(): void {
  }

}
