import { Component } from "@angular/core";
/**
 * The component can also be created using CLI as
 * 'ng generate component component_name' or 'ng g c component_name'
 */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';
    getServerStatus() {
        return this.serverStatus;
    }
}