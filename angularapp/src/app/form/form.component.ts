import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() finalData = new EventEmitter<string>();
  constructor() { }
  data = new FormGroup({
    name : new FormControl(''),
    comment : new FormControl('')
  });

  ngOnInit(): void {
  }
  getData(){
    this.finalData.emit(this.data.value);
    this.data.reset();
}


}
