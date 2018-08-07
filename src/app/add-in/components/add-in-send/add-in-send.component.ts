import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-add-in-send',
  templateUrl: './add-in-send.component.html',
  styleUrls: ['./add-in-send.component.scss']
})
export class AddInSendComponent implements OnInit {

  @Input()
  status: boolean;

  constructor() { }

  ngOnInit() {
  }

}
