import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstname="sumanth";
  lastname="potluri";
change()
{
  const input1 = document.getElementById('id1') as HTMLInputElement;
  const input2 = document.getElementById('id2') as HTMLInputElement;
  this.firstname=input1.value;
   this.lastname=input2.value;

}
}
