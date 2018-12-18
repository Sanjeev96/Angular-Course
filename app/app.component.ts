import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public username = '';
  title = 'practiceDataBinding';
  notxtButtonOf = false;


  OnUserNameEntry(event: any) {
    if (this.username !== null || this.username !== '') {
      this.notxtButtonOf = true;
    }
    // if (this.username == null || this.username == '') {
    //   this.notxtButtonOf = false;
    // } was used before final stage of adding button functionality
  }

  onBtnClick() {
    this. username = null;
    this.notxtButtonOf = false;
  }
}

