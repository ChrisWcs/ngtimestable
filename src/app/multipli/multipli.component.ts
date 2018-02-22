import { Component, OnInit } from '@angular/core';
import { SingleStateService } from '../single-state.service';

@Component({
  selector: 'app-multipli',
  templateUrl: './multipli.component.html',
  styleUrls: ['./multipli.component.css']
})

export class MultipliComponent implements OnInit {

  constructor(public singleState: SingleStateService) { }

  ngOnInit() {
  }

}
