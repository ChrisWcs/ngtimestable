import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestable',
  templateUrl: './timestable.component.html',
  styleUrls: ['./timestable.component.css']
})
export class TimestableComponent implements OnInit {

  numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

  constructor() { }

  ngOnInit() {
  }

}
