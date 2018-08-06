import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-in-status',
  templateUrl: './add-in-status.component.html',
  styleUrls: ['./add-in-status.component.scss']
})
export class AddInStatusComponent implements OnInit {

  carros = 15;
  motos = 10;

  constructor() { }

  ngOnInit() {
  }

}
