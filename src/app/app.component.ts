import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prifilled';

  userData = {
    email: "akshayarh@gmail.com",
    password: '123456',
    address: 'shree 2A wing, Pune Maharastra',
    mobile: 987654321
    }
}
