import { Component} from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl: './server.component.html'
})
export class ServerComponent {
//   serverId = 10;
  serverId: number = 12;

//   serverStatus = 'online';
  serverStatus: string = "offline";

  getServerStatus() {
   return this.serverStatus;
  }
}