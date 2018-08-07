import {Component, EventEmitter, Input, Output, OnInit} from "@angular/core";

@Component({
  selector: 'app-add-in-send',
  templateUrl: './add-in-send.component.html',
  styleUrls: ['./add-in-send.component.scss']
})
export class AddInSendComponent implements OnInit {

  @Input()
  status: boolean;

  @Output()
  click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }
}
