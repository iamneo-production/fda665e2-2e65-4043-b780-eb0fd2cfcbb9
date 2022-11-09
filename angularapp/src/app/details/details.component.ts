import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() list: any;
  constructor() { }

  ngOnInit(): void {
  }
  data:any = []
ngOnChanges()
{
  this.data.push(this.list);
}

}
