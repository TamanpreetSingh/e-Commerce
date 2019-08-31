import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  toBuy(){
    document.getElementById("#buy").scrollIntoView();
  }
  toDeal1(){
    document.getElementById("#desc1").scrollIntoView();
  }
  toDeal2(){
    document.getElementById("#desc2").scrollIntoView();
  }
  toDeal3(){
    document.getElementById("#desc3").scrollIntoView();
  }
}
