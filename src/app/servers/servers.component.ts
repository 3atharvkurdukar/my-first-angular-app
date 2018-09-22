import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username: string = '';

  constructor() {

  }
  ngOnInit() {
  }

  onLoginUser() {
    this.username = '';
  }

  isValidUsername() {
    return (this.username.length > 0);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement> event.target).value;
  // }
}
