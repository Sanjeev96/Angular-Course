import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practiceDirectives';

  // tslint:disable-next-line:no-inferrable-types
  public toggle: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  public countArray = [];

  clickLog() {
    // clickCount = this.count;
    this.countArray.push(this.countArray.length);

  }

  hidetxt() {
    this.toggle = true;
  }

  showtxt() {
    this.toggle = false;
  }

  getColor(count: number) {
    return count >= 5 ? 'blue' : 'white';
  }
}
