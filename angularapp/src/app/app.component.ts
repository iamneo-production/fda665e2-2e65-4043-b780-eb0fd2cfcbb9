import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component-Interaction';
 list: any = {};
  getData(item:any){
    this.list = item;
  }
}
