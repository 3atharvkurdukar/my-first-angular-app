import { Component } from '@angular/core';
/**
 * The component can also be created using CLI as
 * 'ng generate component component_name' or 'ng g c component_name'
 */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .offline {
        color: white
      }
    `]
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'red';
    }
}
